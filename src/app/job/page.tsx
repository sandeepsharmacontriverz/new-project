import { LoadTable } from "@components/core/LoadTable";

const Job = () => {
  return (
    <div className="w-full h-full mt-10 flex flex-col items-center">
      <p className="text-4xl font-bold text-black mb-10">Job</p>
      <LoadTable type="2" />
    </div>
  );
};

export default Job;
