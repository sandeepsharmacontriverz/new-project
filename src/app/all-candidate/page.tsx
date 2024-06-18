import { LoadTable } from "@components/core/LoadTable";

const AllCandidates = () => {

  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl font-bold text-black mt-7">
        Candidates for role ML engineer
      </p>
      <p className="text-xl mt-10 mb-6 text-black font-bold">Recommended</p>
      <LoadTable type="1" />
      <p className="text-xl mt-10 mb-6 text-black font-bold">Not recommended</p>
      <LoadTable type="1" />
    </div>
  );
};

export default AllCandidates;
