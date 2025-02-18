"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { usePathname } from "next/navigation";
import useSocialSignIn from "@hooks/useSocialSignIn";


const Nav = () => {
  const pathname = usePathname();
  const { userData,setUserData, error, loading, socialSignIn } = useSocialSignIn();


  useEffect(() => {
    const storedUserData = window.localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

 

  return (
    <nav className="flex flex-row gap-14 mt-4 justify-end w-full items-center">
      {pathname != "/home" && (
        <>
          <Link
            href="/home"
            className="text-xl text-black p-4 px-6 font-semibold"
          >
            Home
          </Link>
          <Link
            href="/job"
            className="text-xl text-black p-4 px-6 font-semibold"
          >
            Jobs
          </Link>
          <Link
            href="/add-candidate"
            className="text-black p-1 font-semibold px-8 text-center"
          >
            <p className="text-xl font-semibold">Upload new CVs</p>
            <p className="font-medium">10 tokens</p>
          </Link>
        </>
      )}

      {userData ? (
        <img
          src={userData?.user?.photoURL}
          className="w-24 h-24 rounded-full bg-white text-black mr-14 flex items-center justify-center"
          alt="Account icon"
        />
      ) : (
        <FcGoogle
          className="rounded-full w-24 h-24 text-black mr-14 p-8 cursor-pointer"
          onClick={socialSignIn}
        />
      )}
    </nav>
  );
};

export default Nav;
