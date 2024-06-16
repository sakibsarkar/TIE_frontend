import Navbar from "@/components/shared/Navbar";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-[0px]">
      <Navbar />
      <div className="layoutContainer">{children}</div>
    </div>
  );
};

export default layout;
