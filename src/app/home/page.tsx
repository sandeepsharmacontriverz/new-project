"use client";
import { Modal } from "../../components/core/Modal";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function App() {
  const [modalShow, setModalShow] = useState<string>("");
  const [desc, setDesc] = useState(false);
  const [cv, setCv] = useState(false);
  const router = useRouter();

  return (
    <>
      {modalShow === "description" ? (
        <Modal type="description" setModalShow={setModalShow} fun={setDesc} />
      ) : modalShow === "cv" ? (
        <Modal type="cv" setModalShow={setModalShow} fun={setCv} />
      ) : (
        ""
      )}
      <div className="flex flex-col items-center justify-center h-full mt-24">
        <div className="h-full flex flex-col md:flex-row mx-24 md:mx-88">
          <div className="w-full h-full flex items-center justify-center m-auto">
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
