import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utils/firebase';
import { toasterError, toasterSuccess } from '@components/core/Toaster';

const useSocialSignIn = () => {
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const socialSignIn = async () => {
    setLoading(true);
    try {
      let userData: any = await signInWithPopup(auth, provider);
      if (userData && userData.user) {
        localStorage.setItem("token", userData.user?.accessToken);
        localStorage.setItem("userData", JSON.stringify(userData));
        toasterSuccess("Sign in successfully", 1000, userData?.user?.uid);
        setUserData(userData);
      } else {
        console.error("User or email is null");
        setError("User or email is null");
      }
    } catch (error) {
      toasterError(error, 3000, "id");
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { userData, error, loading, socialSignIn,setUserData };
};

export default useSocialSignIn;
