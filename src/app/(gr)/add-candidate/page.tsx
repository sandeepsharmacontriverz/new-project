"use client";
import { Modal } from "@components/core/Modal";
import Nav from "@components/core/Nav";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AllCandidate = () => {
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
      <div className="flex flex-col items-center h-full">
        <div className="mt-14 text-center">
          <p className="text-7xl font-bold text-black">Add new candidates</p>
          <p className="text-lg mt-14 mb-6 text-black font-bold">
            Choose a role for CV evaluation from current jobs:
          </p>
          <select className="text-white p-3 px-6 cursor-pointer rounded-lg w-96 text-lg font-semibold bg-black">
            <option>Dummy Role 1</option>
            <option>Product Manager</option>
            <option>IT Staff</option>
          </select>
          <div className="flex flex-col gap-5 mt-5 items-center">
            <div className="flex items-center gap-2 text-lg font-bold mr-12">
              <span>...OR</span>
              <button
                className={`p-4 rounded-lg ${
                  desc ? "bg-[#b0c4de] text-black" : "bg-[#222831] text-white"
                }  text-xl w-96 font-bold`}
                onClick={() => setModalShow("description")}
              >
                {desc ? "New Job Description Pasted!" : "Paste Job Description"}
              </button>
            </div>
            <button
              className={`p-6 rounded-lg ${
                cv ? "bg-[#b0c4de] text-black" : "bg-[#222831] text-white"
              } text-xl w-96 font-bold`}
              onClick={() => setModalShow("cv")}
            >
              {cv ? "CVs Uploaded!" : "Upload new CVs"}
            </button>
          </div>
          <button
            className="text-white p-4 bg-[#78909c] font-semibold w-96 mt-20 rounded-lg"
            onClick={() => router.push("/all-candidate")}
          >
            <p className="text-xl">Analyze CVs</p>
            <p className="text-sm">(10 tokens)</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default AllCandidate;
