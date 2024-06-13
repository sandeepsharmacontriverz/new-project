
  export const checkAcess = () => {
    const token = typeof window !== "undefined" && window.localStorage.getItem("token");
    if (!token && typeof window !== "undefined") {
       window.location.href = "/login";
    }
  }