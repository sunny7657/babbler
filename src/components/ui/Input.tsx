interface IInput {
  label: string;
}

const Input = ({ label }: IInput) => {
  return (
    <>
      <label htmlFor={label} className="mb-2 font-medium text-gray-700">
        <span>{label}</span>
      </label>
      <input
        type="text"
        id={label}
        className="mb-4 p-2  rounded focus:outline-none focus:ring-2 focus:dark_violet"
      />
    </>
  );
};

export default Input;
