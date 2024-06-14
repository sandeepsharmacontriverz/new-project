"use client";
import { Modal } from "@components/core/Modal";
import Nav from "@components/core/Nav";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Candidate = () => {
  const router = useRouter();
  const [modalShow, setModalShow] = useState<string>("");
  const [desc, setDesc] = useState(false);
  const [cv, setCv] = useState(false);

  return (
    <>
      {modalShow === "description" ? (
        <Modal type="description" setModalShow={setModalShow} fun={setDesc} />
      ) : modalShow === "cv" ? (
        <Modal type="cv" setModalShow={setModalShow} fun={setCv} />
      ) : (
        ""
      )}
      <div className="flex flex-col items-center h-full bg-black">
        <div className="mt-10 text-center">
          <p className="text-3xl font-medium text-white">Add new candidates</p>
          <p className="text-sm mt-5 text-white">
            Choose a role for CV evaluation from current jobs:
          </p>
          <select className="text-black p-3 px-6 cursor-pointer rounded-lg w-60">
            <option>Dummy Role 1</option>
            <option>Product Manager</option>
            <option>IT Staff</option>
          </select>
          <div className="flex flex-col gap-10 mt-14">
            <button
              className={`p-2 ${
                desc
                  ? "text-white bg-gradient-to-b from-[#077e1a]/30 to-[#077e1a]"
                  : "text-black bg-white"
              }  text-xl w-96 font-bold`}
              onClick={() => setModalShow("description")}
            >
              {desc
                ? "New Job Description Pasted!"
                : "...or paste a new Job Description"}
            </button>
            <button
              className={`p-6 ${
                cv
                  ? "text-white bg-gradient-to-b from-[#077e1a]/30 to-[#077e1a]"
                  : "text-black bg-white"
              } text-3xl w-96 font-bold`}
              onClick={() => setModalShow("cv")}
            >
              {cv ? "CVs Uploaded!" : "Upload new CVs"}
            </button>
          </div>
          <button
            className="text-white p-4 bg-[#077e1a] text-2xl font-semibold w-96 mt-40"
            onClick={() => router.push("/data")}
          >
            <p>Analyze</p>
            <p>(10 tokens)</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Candidate;
