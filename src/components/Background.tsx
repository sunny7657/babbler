import React, { ReactNode } from "react";

export interface BackgroundProps {
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute w-full h-full -z-1 ">
        <img
          src="/src/assets/bg-image-1.png"
          alt="background image talking girl"
          className="absolute top-4 right-4"
        />
        <img
          src="/src/assets/bg-image-4.png"
          alt="background image talking girl"
          className="absolute bottom-4 left-4"
        />
        {/* <img
          src="/src/assets/bg-bridge.png"
          alt="background image"
          className="absolute bottom-1/3 left-1/4 rotate-90 w-40 "
        /> */}

        {/* <img
          src="/src/assets/bg-megaphone.png"
          alt="background image"
          className="absolute top-1/2 left-1/3 rotate-270 w-40"
        /> */}
        {/* <img
          src="/src/assets/bg-image-5.png"
          alt="background image talking girl"
        /> */}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
