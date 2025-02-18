export const Modal = ({ type, setModalShow, fun,handleChange,formData }: any) => {
  return (
    <div className="fixed inset-0 bg-black/50 h-full w-full flex justify-center items-center z-50">
      <div className="bg-white w-2/5 h-3/5 flex flex-col p-10 justify-center items-center rounded-xl transform transition-transform duration-300 ease-out scale-100 opacity-100 animate-modal-enter">
        {type === "description" ? (
          <textarea
            onChange={handleChange}
            name="job_description"
            className="h-full w-full text-black mb-7 text-lg placeholder-opacity-transition focus:placeholder-transparent p-2"
            placeholder="Insert your job description here. you don't need to worry about the layout or structure. Just include the essence of the job, tasks, deliverables, requirements, qualifications, skills, etc."
          ></textarea>
        ) : (
          <div className="h-full flex items-center">
            <input
              type="file"
              multiple
              onChange={handleChange}
              accept="application/pdf"
              className="border-2 border-black rounded-md text-black p-2 text-lg"
            />
          </div>
        )}
        <div className="flex gap-6">
          <button
            className="bg-[#78909c] text-3xl py-3 w-44 text-white rounded-xl"
            onClick={() => {
              fun(true);
              setModalShow("");
            }}
          >
            {type === "description" ? "Confirm" : "OK"}
          </button>
          <button
            className="bg-black/60 text-3xl py-3 w-44 text-white rounded-xl"
            onClick={() => setModalShow("")}
          >
            Cancel  
          </button>
        </div>
      </div>
    </div>
  );
};
