import { toast, ToastContainer } from "react-toastify";
import { } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//to make notifactio to any componentet
export const myNotify = (msg: string, type: "warn" | "success" | "error") => {
  if (type === "warn") toast.warn(msg);
  else if (type === "success") toast.success(msg);
  else if (type === "error") toast.error(msg);
};
export { ToastContainer }