"use client";
import { Modal } from "../../components/core/Modal";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toasterError, toasterSuccess } from "@components/core/Toaster";
import { signInWithPopup } from "firebase/auth";
import { auth, provider, storage } from "../../utils/firebase";

function App() {
  const [modalShow, setModalShow] = useState<string>("");
  const [desc, setDesc] = useState(false);
  const [cv, setCv] = useState(false);
  const [user, setUser] = useState<any>();
  const router = useRouter();

  const socialSignIn = async (e: any) => {
    e.preventDefault();
    try {
      let userData: any = await signInWithPopup(auth, provider);

      if (userData && userData.user) {
        const mainFormData = {
          firstname: userData.user?.displayName,
          email: userData.user?.email,
          mobilenumber: userData.user?.phoneNumber,
        };
        setUser(userData);
        console.log(userData, "userData");
        localStorage.setItem("token", userData.user?.accessToken);
        toasterSuccess("Sign in successfully", 1000, userData?.id);
      } else {
        console.error("User or email is null");
      }
    } catch (error) {
      toasterError(error, 3000, "id");
    }
  };

  return (
    <>
      {modalShow === "description" ? (
        <Modal type="description" setModalShow={setModalShow} fun={setDesc} />
      ) : modalShow === "cv" ? (
        <Modal type="cv" setModalShow={setModalShow} fun={setCv} />
      ) : (
        ""
      )}
      <div className="flex flex-col items-center justify-center h-screen bg-black">
        <div className="mt-6 text-end w-full">
          <button
            className="bg-white rounded-full w-28 h-28 text-black mr-14"
            onClick={socialSignIn}
          >
            {user && (
              <img
                src={user?.user?.photoURL}
                className="w-28 h-28 rounded-full"
              ></img>
            )}
            {!user && "Google sign"}
          </button>
        </div>
        <div className="w-full h-full flex flex-row">
          <div className="w-1/2 h-full flex items-center justify-center ml-40">
            <h1 className="text-5xl font-bold mx-32">
              Evaluate a CV of a candidate with AI
            </h1>
          </div>
          <div className="w-1/2 h-full flex flex-col gap-14 items-center justify-center mr-40">
            <button
              className={`text-white p-6 ${
                desc
                  ? "bg-gradient-to-b from-[#077e1a]/30 to-[#077e1a]"
                  : "bg-[#3a3a3a]"
              }  text-3xl w-96 font-bold`}
              onClick={() => setModalShow("description")}
            >
              {desc ? "Job Description Pasted!" : "Paste your job description"}
            </button>
            <button
              className={`text-white p-6 ${
                cv
                  ? "bg-gradient-to-b from-[#077e1a]/30 to-[#077e1a]"
                  : "bg-[#3a3a3a]"
              } text-3xl w-96 font-bold`}
              onClick={() => setModalShow("cv")}
            >
              {cv ? "CVs Uploaded!" : "Upload some CV"}
            </button>
            <button
              className="text-white p-4 bg-[#077e1a] text-2xl font-semibold w-96"
              onClick={() => router.push("/data")}
            >
              <p>Analyze</p>
              <p>(10 tokens)</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
