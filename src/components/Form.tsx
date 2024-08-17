import React from "react";

interface FormProps {
  isClickSignup: boolean;
}

const Form: React.FC<FormProps> = ({ isClickSignup }) => {
  return (
    <form className="flex flex-col text-lg border border-sky-200 p-6 rounded-lg bg-white shadow-md max-w-md mx-auto">
      {isClickSignup && (
        <>
          <label htmlFor="name" className="mb-2 font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mb-4 p-2 border border-sky-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </>
      )}
      <label htmlFor="email" className="mb-2 font-medium text-gray-700">
        Email
      </label>
      <input
        type="email"
        id="email"
        className="mb-4 p-2 border border-sky-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
      <label htmlFor="password" className="mb-2 font-medium text-gray-700">
        Password
      </label>
      <input
        type="password"
        id="password"
        className="mb-4 p-2 border border-sky-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
      <button
        type="submit"
        className="p-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
