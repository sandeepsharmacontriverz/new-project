"use client";

import { useRouter } from 'next/navigation';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider, storage } from '../utils/firebase';
import { useEffect, useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { toasterError, toasterSuccess } from '../components/core/Toaster';

export default function Home() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const socialSignIn = async (e: any) => {
    e.preventDefault();
    try {
      let userData: any = await signInWithPopup(auth, provider);
      
      if (userData && userData.user) {
        const mainFormData = {
          firstname: userData.user?.displayName,
          email: userData.user?.email,
          mobilenumber: userData.user?.phoneNumber,
        };
        localStorage.setItem("token", userData.user?.accessToken);
        toasterSuccess("Sign in successfully", 1000, userData?.id);
      } else {
        console.error("User or email is null");
      }
    } catch (error) {
      toasterError(error, 3000, "id");
    }
  };

  const handleFileUpload = async (files: FileList) => {
    const file = files[0]; // Assuming we handle one file at a time for simplicity
    const storageRef = ref(storage, `uploads/${file.name}`);
    
    try {
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      
      // Example of using the downloadURL or storing it in Firestore
      // console.log(downloadURL);
      toasterSuccess("File uploaded successfully!", 3000, "id");
    } catch (error:any) {
      toasterError(error.message, 3000, "id");
    }
  };

  return (
    <div className="mt-10 text-center font-bold text-2xl">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={socialSignIn}>Sign in with Google</button><br />
      <button className="mt-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setOpen(true)}>Upload File</button>
      {open && <EditPopup onClose={() => setOpen(false)} handleFileUpload={handleFileUpload} />}
    </div>
  );
}

interface EditPopupProps {
  onClose: () => void;
  handleFileUpload: (files: FileList) => void;
}

const EditPopup: React.FC<EditPopupProps> = ({ onClose, handleFileUpload }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFileUpload(e.target.files);
      onClose();
    }
  };

  return (
    <div className="flex h-fit w-auto z-10 fixed justify-center bg-transparent top-3 left-0 right-0 bottom-0 p-3">
      <div className="bg-white border w-auto py-3 px-5 border-gray-300 shadow-lg rounded-md">
        <div className="flex justify-between">
          <h3>Upload File</h3>
          <span onClick={onClose} className="cursor-pointer transition duration-300 hover:text-black-500">
            &times;
          </span>
        </div>
        <hr />
        <div className="mb-4 flex">
          <label className="block mb-1 font-medium text-sm w-32">File:</label>
          <div>
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              className="flex-grow p-1 border w-60 rounded-md text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
