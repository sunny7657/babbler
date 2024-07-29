import React, { ReactNode } from "react";

export interface BackgroundProps {
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute -z-1 ">
        <img
          src="/src/assets/bg-image-1.png"
          alt="background image talking girl"
        />
        <img
          src="/src/assets/bg-image-4.png"
          alt="background image talking girl"
        />
        <img
          src="/src/assets/bg-image-5.png"
          alt="background image talking girl"
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
