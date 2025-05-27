import { Bounce, toast } from "react-toastify";

export const CustomToast = (text: string) =>
  toast(text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    progressClassName: " !bg-cyan-400 ",
  });
