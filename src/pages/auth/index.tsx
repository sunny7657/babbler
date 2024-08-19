import Background from "@/components/Background";
import Form from "@/components/Form";
import { useState } from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [isClickLSignup, setIsClickLSignup] = useState(true);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100 relative">
      <Background>
        <div className="relative w-[80vw] max-w-4xl bg-white shadow-lg rounded-3xl flex  justify-around items-center  z-10">
          <div className="relative z-10 flex flex-col items-start ">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">Welcome</h1>
            <div className="flex space-x-4 mb-6">
              <Link to="/auth/signup">
                <button
                  className={`px-6 py-3 rounded text-xl font-semibold transition-colors ${
                    isClickLSignup
                      ? "bg-blue-600 text-white"
                      : "bg-gray-300 text-gray-800 hover:bg-gray-400"
                  }`}
                  onClick={() => setIsClickLSignup(true)}
                >
                  Sign Up
                </button>
              </Link>
              <Link to="/auth/login">
                <button
                  className={`px-6 py-3 rounded text-xl font-semibold transition-colors ${
                    !isClickLSignup
                      ? "bg-blue-600 text-white"
                      : "bg-gray-300 text-gray-800 hover:bg-gray-400"
                  }`}
                  onClick={() => setIsClickLSignup(false)}
                >
                  Log In
                </button>
              </Link>
            </div>
            <Form isClickSignup={isClickLSignup} />
          </div>
          <div className="relative w-full md:w-1/2 flex justify-center items-center">
            <img
              src="/src/assets/bg-image-9.png"
              alt="background image"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </Background>
    </div>
  );
};

export default AuthPage;
