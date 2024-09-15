import React from "react";
import Input from "./ui/Input";

interface FormProps {
  isClickSignup: boolean;
}

const Form: React.FC<FormProps> = ({ isClickSignup }) => {
  return (
    <form className="flex flex-col text-lg max-w-md mx-auto p-4">
      {isClickSignup && <Input label="Name" />}
      <Input label="Email" />
      <Input label="Password" />
      <button
        type="submit"
        className="p-2 bg-black text-white rounded hover:bg-sky-600 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
