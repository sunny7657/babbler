import Background from "@/components/Background";
import Form from "@/components/Form";
import { useState } from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [isClickLSignup, setIsClickLSignup] = useState(true);

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center text-opacity-90 ">
      <Background>
        <div className="w-[50vw] h-[40vh] bg-blue/50 shadow-2xl rounded-3xl backdrop-blur-sm flex justify-center items-center">
          <div className="">
            <h1 className="text-5xl font-bold mb-8">Welcome</h1>
            <div className="flex space-x-4">
              <Link to="/auth/signup">
                <button
                  className="bg-white px-4 py-2 rounded text-3xl"
                  onClick={() => setIsClickLSignup(true)}
                >
                  Sign Up
                </button>
              </Link>
              <Link to="/auth/login">
                <button
                  className="bg-white px-4 py-2 rounded text-3xl"
                  onClick={() => setIsClickLSignup(false)}
                >
                  Log In
                </button>
              </Link>
            </div>
            <Form isClickSignup={isClickLSignup} />
          </div>
        </div>
      </Background>
    </div>
  );
};

export default AuthPage;
