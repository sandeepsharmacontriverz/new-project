"use client";
import { useEffect, useState } from "react";
import Tables from "./Tables";

export const LoadTable = ({ type }: any) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const data1 = [
    {
      id: 1,
      fullname: "Beetlejuice",
      email: "bee@juice.com",
      CVstructured: (
        <a href="www.google.com" target="_blank">
          Open
        </a>
      ),
      CVfile: "Download",
      score: "85",
      features: "3yrs. experience in ML | M. Tech | PyTorch | LLM | AWS",
    },
    {
      id: 2,
      fullname: "Demo",
      email: "demo@adam.com",
      CVstructured: "Open",
      CVfile: "Download",
      score: "91",
      features: "5yrs. experience in ML | M. Tech | AWS",
    },
  ];
  const columns1 = [
    {
      name: <p className="text-[15px] text-black font-bold">Full name</p>,
      selector: (row: any) => row.fullname,
      width: "15%",
    },
    {
      name: <p className="text-[15px] text-black font-bold">Email</p>,
      selector: (row: any) => row.email,
      width: "15%",
    },
    {
      name: <p className="text-[15px] text-black font-bold">CV (structured)</p>,
      selector: (row: any) => row.CVstructured,
      width: "10%",
    },
    {
      name: <p className="text-[15px] text-black font-bold">CV (file)</p>,
      selector: (row: any) => row.CVfile,
      width: "10%",
    },
    {
      name: <p className="text-[15px] text-black font-bold">Score</p>,
      selector: (row: any) => row.score,
      width: "10%",
    },
    {
      name: <p className="text-[15px] text-black font-bold">Features</p>,
      selector: (row: any) => row.features,
      width: "40%",
    },
  ];

  const data2 = [
    {
      role: "ML engineer",
      CVscreened: 354,
      description: "Open",
    },
    {
      role: "Frontend developer",
      CVscreened: 100,
      description: "Open",
    },
    {
      role: "Product manager",
      CVscreened: 12,
      description: "Open",
    },
  ];
  const columns2 = [
    {
      name: <p className="text-[15px] text-black font-bold">Role</p>,
      selector: (row: any) => row.role,
      //   width: "15%",
    },
    {
      name: <p className="text-[15px] text-black font-bold">CV screened</p>,
      selector: (row: any) => row.CVscreened,
      //   width: "15%",
    },
    {
      name: <p className="text-[15px] text-black font-bold">CV (structured)</p>,
      selector: (row: any) => row.description,
      //   width: "20%",
    },
  ];

  useEffect(() => {
    setShow(true);
  });

  return (
    <div className="w-[80vw] rounded-xl">
      {show && (
        <Tables
          data={type == "1" ? data1 : data2}
          columns={type == "1" ? columns1 : columns2}
        />
      )}
    </div>
  );
};
