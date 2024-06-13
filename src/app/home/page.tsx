"use client";
import { Modal } from "app/components/Modal";
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
      <div className="flex flex-col items-center justify-center h-screen bg-black">
        <div className="mt-6 text-end w-full">
          <button className="bg-white rounded-full px-4 py-5 text-black mr-14">
            Google sign
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
                  ? "bg-gradient-to-b from-[#077e1a]/10 to-[#077e1a]"
                  : "bg-[#3a3a3a]"
              }  text-3xl w-96 font-bold`}
              onClick={() => setModalShow("description")}
            >
              {desc ? "Job Description Pasted!" : "Paste your job description"}
            </button>
            <button
              className={`text-white p-6 ${
                cv
                  ? "bg-gradient-to-b from-[#077e1a]/10 to-[#077e1a]"
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
