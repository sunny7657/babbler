interface FormProps {
  isClickSignup: boolean;
}

const Form: React.FC<FormProps> = ({ isClickSignup }) => {
  console.log(isClickSignup);
  return (
    <form className=" flex flex-col text-2xl  border-sky-100 rounded">
      {isClickSignup && (
        <>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="border border-sky-100 rounded"
          />
        </>
      )}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        className="border border-sky-100 rounded"
      />
      <label htmlFor="password">Password</label>
      <input
        type="Password"
        id="password"
        className="border border-sky-100 rounded"
      />
    </form>
  );
};

export default Form;
