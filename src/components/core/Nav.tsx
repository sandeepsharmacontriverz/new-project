import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex flex-row gap-5 mt-6 justify-end w-full items-center">
      <Link href="/home" className="bg-white/20 p-4 px-6 font-medium">
        Home
      </Link>
      <Link
        href="/candidate"
        className="text-white p-1 bg-[#077e1a] font-semibold px-8 text-center"
      >
        <p className="text-lg">Upload new CVs</p>
        <p className="font-light">10 tokens</p>
      </Link>
      <button className="bg-white rounded-full w-28 h-28 text-black mr-14">
        Account icon
      </button>
    </nav>
  );
};

export default Nav;
