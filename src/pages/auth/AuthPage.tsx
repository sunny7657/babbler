import Form from "@/components/Form";
import { FC, useState } from "react";
import { Link } from "react-router-dom";

// interface IAuthPage {}

const AuthPage: FC = () => {
  const [isClickLSignup, setIsClickLSignup] = useState(true);

  return (
    <>
      <div className="w-screen h-screen flex flex-col bg-black">
        <div className="basis-1/3 bg-transparent flex items-center justify-center">
          <div className="w-20 h-20 rounded-tl-lg rounded-br-lg rounded-bl-lg bg-bg_light_grey flex items-center justify-center">
            <svg>
              <use href={`/images/icons.svg#emptyMessage`}></use>
            </svg>
          </div>
        </div>
        <div className="basis-2/3 bg-bg_light_grey rounded-tl-5xl flex flex-col items-center justify-center gap-6">
          <h2 className="text-2xl font-bold text-center">
            {isClickLSignup ? "Sign up" : "Login"}
          </h2>
          <Form isClickSignup={isClickLSignup} />
          {isClickLSignup ? (
            <p>
              Already have any account?{" "}
              <Link to="/auth/login">
                <button
                  className={`text-gray-800 hover:text-medium_lavender"
                }`}
                  onClick={() => setIsClickLSignup(false)}
                >
                  Sign In
                </button>
              </Link>
            </p>
          ) : (
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
          )}
        </div>
      </div>
    </>
  );
};

export default AuthPage;
