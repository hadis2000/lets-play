import type { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

const PageLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="bg-black w-full h-screen flex flex-col items-center justify-center font-inter">
      {children}
      <ToastContainer />
    </div>
  );
};

export default PageLayout;
