import Background from "@/components/Background";
import Form from "@/components/Form";
import { useState } from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [isClickLSignup, setIsClickLSignup] = useState(true);

  return (
    <div className="w-[100vw] h-[100vh] flex text-opacity-90 relative">
      <Background>
        <div className="relative w-[50vw] h-[40vh] bg-blue/50 shadow-2xl rounded-3xl flex p-9 justify-between backdrop-blur-sm z-10">
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-8">Welcome</h1>
            <div className="flex space-x-4">
              <Link to="/auth/signup">
                <button
                  className="bg-white px-4 py-2 rounded text-3xl bg-gradient-to-r from-teal-400 to-blue-500 hover:text-white"
                  onClick={() => setIsClickLSignup(true)}
                >
                  Sign Up
                </button>
              </Link>
              <Link to="/auth/login">
                <button
                  className="bg-white px-4 py-2 rounded text-3xl bg-gradient-to-r from-teal-400 to-blue-500 hover:text-white"
                  onClick={() => setIsClickLSignup(false)}
                >
                  Log In
                </button>
              </Link>
            </div>
            <Form isClickSignup={isClickLSignup} />
          </div>
          <img
            src="/src/assets/bg-image-9.png"
            alt="background image"
            className="absolute right-9 bottom-1/2 translate-y-1/2 z-0"
          />
        </div>
      </Background>
    </div>
  );
};

export default AuthPage;
