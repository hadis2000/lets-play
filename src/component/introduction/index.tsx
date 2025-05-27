import type { ReactNode } from "react";

const Introduction = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="font-extrabold text-white sm:text-4xl text-2xl animate-grow-fade text-shadow-neon absolute top-[50%] left-[50%] -translate-[50%]">
      {children}
    </div>
  );
};

export default Introduction;
