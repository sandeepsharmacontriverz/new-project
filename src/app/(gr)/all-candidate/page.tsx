"use client";
// import Tables from "@components/core/Tables";
import Loading from "app/loading";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicTables = dynamic(() => import("@components/core/Tables"), {
  loading: () => <Loading />,
});

const AllCandidates = () => {
  let data = [
    {
      id: 1000,
      name: "James Butt",
      country: {
        name: "Algeria",
        code: "dz",
      },
      company: "Benton, John B Jr",
      date: "2015-09-13",
      status: "unqualified",
      verified: true,
      activity: 17,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png",
      },
      balance: 70663,
    },
    {
      id: 100,
      name: "Demo",
      country: {
        name: "India",
        code: "in",
      },
      company: "Test company",
      date: "2024-06-14",
      status: "qualified",
      verified: true,
      activity: 25,
      representative: {
        name: "NO body",
      },
      balance: 200,
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl font-bold text-black mt-7">
        Candidates for role ML engineer
      </p>
      <p className="text-xl mt-10 mb-6 text-black font-bold">Recommended</p>

      <div className="w-[80vw] rounded-xl">
        <Suspense fallback={<Loading />}>
          <DynamicTables />
          {/* <Tables /> */}
        </Suspense>
      </div>
      <p className="text-xl mt-10 mb-6 text-black font-bold">Not recommended</p>
      <div className="w-[80vw] rounded-xl">
        <DynamicTables />
        {/* <Tables /> */}
      </div>
    </div>
  );
};

export default AllCandidates;
