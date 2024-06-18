"use client";
import { Modal } from "../../components/core/Modal";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import MiniLoader from "@components/core/MiniLoader";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {storage} from "../../utils/firebase";
import useSocialSignIn from "@hooks/useSocialSignIn";
import { toasterError, toasterSuccess } from '@components/core/Toaster';

interface FormData {
  firebase_admin_name: string;
  user_email: string;
  job_description: string;
  cv_pdf_bucket_paths_list: string[]; // Specify the type as string[]
}

function App() {
  const router = useRouter();
  const { userData,setUserData, error, loading, socialSignIn } = useSocialSignIn();
  const [modalShow, setModalShow] = useState<string>("");
  const [desc, setDesc] = useState(false);
  const [cv, setCv] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firebase_admin_name: "",
    user_email: "",
    job_description: "",
    cv_pdf_bucket_paths_list: [],
  });
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (userData) {
      setFormData({
        ...formData,
        firebase_admin_name: "dlaller1988-31279",
        user_email: userData?.email
      });
    }
  },[userData]);

  const handleChange = async (event: any) => {
    if (event?.target?.name === "job_description") {
      setFormData({
        ...formData,
        [event?.target?.name]: event?.target?.value,
      });
    } else {
      if (!event.target.files) return;
      const files = Array.from(event.target.files);
      
      const fileUploadPromises = files.map((file:any) => {
        const storageRef = ref(storage, `files/${file.name}`);
        return uploadBytes(storageRef, file)
          .then(snapshot => getDownloadURL(snapshot.ref));
      });

      try {
        const fileURLs = await Promise.all(fileUploadPromises);
        setFormData({
          ...formData,
          cv_pdf_bucket_paths_list: fileURLs,
        });
        console.log('Files uploaded and URLs stored:', fileURLs);
      } catch (error) {
        console.error('Error uploading files:', error);
      }
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (formData.job_description === "") {
      toasterError("Please Enter Job Description", 3000, "id")
      return
    } else if (formData.cv_pdf_bucket_paths_list.length === 0) {
      toasterError("Please upload atleast one CV", 3000, "id")
      return
    } else if (!userData) {
      window.localStorage.setItem("formData",JSON.stringify(formData))
      await socialSignIn();
    }

    setLoad(true);
    await fetch("http://35.245.104.14:8004/analyze_CVs", {
      method: "POST",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoad(false);
        router.push("/all-candidate")
        console.log(data)
      }).catch((err) => {
        console.log(err)
      })
    };
  return (
    <>
      {modalShow === "description" ? (
        <Modal type="description" formData={formData} handleChange={handleChange} setModalShow={setModalShow} fun={setDesc} />
      ) : modalShow === "cv" ? (
        <Modal type="cv" formData={formData} handleChange={handleChange} setModalShow={setModalShow} fun={setCv} />
      ) : (
        ""
      )}
      <div className="flex flex-col items-center justify-center h-full mt-24">
        <div className="h-full flex flex-col md:flex-row mx-24 md:mx-88">
          <div className="w-full h-full flex items-center justify-center m-auto">
            <h1 className="text-5xl font-extrabold text-black pl-20">
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
            {load ? (
              <div className="h-24">
                <MiniLoader />
              </div>
            ) : (
              <button
                className="text-white p-4 bg-[#78909c] text-2xl font-semibold w-96 rounded-xl"
                onClick={handleSubmit}
              >
                <p>Analyze</p>
                <p>(10 tokens)</p>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
