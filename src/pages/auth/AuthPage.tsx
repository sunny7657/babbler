import Form from "@/components/Form";
import { FC, useState } from "react";
import { Link } from "react-router-dom";

// interface IAuthPage {}

const AuthPage: FC = () => {
  const [isClickLSignup, setIsClickLSignup] = useState(true);

  return (
    <>
      <div className="w-screen h-screen flex flex-col bg-black">
        <div className="basis-1/3 bg-transparent"></div>
        <div className="basis-2/3 bg-bg_light_grey rounded-tl-5xl">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

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
          <Form isClickSignup={isClickLSignup} />
          <p>
            Don't have any account?{" "}
            <Link to="/auth/signup">
              <button
                className={`text-gray-800 hover:text-medium_lavender"
                }`}
                onClick={() => setIsClickLSignup(true)}
              >
                Sign Up
              </button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
