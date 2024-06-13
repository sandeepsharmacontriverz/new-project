
  export const checkAcess = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
  }