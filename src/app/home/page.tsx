"use client";
import { Modal } from "../../components/core/Modal";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toasterError, toasterSuccess } from "@components/core/Toaster";
import { signInWithPopup } from "firebase/auth";
import { auth, provider, storage } from "../../utils/firebase";
import { FcGoogle } from "react-icons/fc";

function App() {
  const [modalShow, setModalShow] = useState<string>("");
  const [desc, setDesc] = useState(false);
  const [cv, setCv] = useState(false);
  const [user, setUser] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    let userData: any =
      typeof window !== "undefined" && window.localStorage.getItem("userData");

    if (userData) {
      setUser({
        user: {
          photoURL: userData,
        },
      });
    }
  }, []);

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
        // console.log(userData.user.photoURL, "userData");
        localStorage.setItem("token", userData.user?.accessToken);
        localStorage.setItem("userData", userData.user?.photoURL);
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
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="mt-6 flex justify-end w-full">
          {/* <button
            className="bg-white rounded-full w-28 h-28 text-black mr-14"
            onClick={socialSignIn}
          >
            {user ? (
              <img
                src={user?.user?.photoURL}
                className="w-28 h-28 rounded-full"
              ></img>
            )}
            {!user && "Google sign"}
          </button> */}
          {user ? (
            <img
              src={user?.user?.photoURL}
              className="bg-white rounded-full w-28 h-28 text-black mr-14"
              alt="Account icon"
            />
          ) : (
            <FcGoogle
              className="rounded-full w-28 h-28 text-black mr-14 p-8 cursor-pointer"
              onClick={socialSignIn}
            />
            // <img
            //   src="/user.png"
            //   onClick={socialSignIn}
            //   className="bg-white rounded-full w-28 h-28 text-black mr-14"
            //   alt="User icon"
            // />
          )}
        </div>
        <div className="h-full flex flex-col md:flex-row mx-24 md:mx-88">
          <div className="w-full h-full flex items-center justify-center">
            <h1 className="text-6xl font-extrabold text-black pl-20">
              Evaluate a CV of a candidate with AI
            </h1>
          </div>
          <div className="w-full h-full flex flex-col gap-14 items-center justify-center">
            <button
              className={`text-white p-6 ${
                desc ? "bg-[#b0c4de]" : "bg-[#222831]"
              } text-3xl w-96 font-bold rounded-xl`}
              onClick={() => setModalShow("description")}
            >
              {desc ? "Job Description Pasted!" : "Paste your job description"}
            </button>
            <button
              className={`text-white p-6 ${
                cv ? "bg-[#b0c4de]" : "bg-[#222831]"
              } text-3xl w-96 font-bold rounded-xl`}
              onClick={() => setModalShow("cv")}
            >
              {cv ? "CVs Uploaded!" : "Upload some CV"}
            </button>
            <button
              className="text-white p-4 bg-[#78909c] text-2xl font-semibold w-96 rounded-xl"
              onClick={() => router.push("/all-candidate")}
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
