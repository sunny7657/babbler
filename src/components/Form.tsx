interface FormProps {
  isClickSignup: boolean;
}

const Form: React.FC<FormProps> = ({ isClickSignup }) => {
  console.log(isClickSignup);
  return (
    <form className="flex flex-col text-2xl">
      {isClickSignup && (
        <>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </>
      )}
      <label htmlFor="email">Email</label>
      <input type="text" id="email" />
      <label htmlFor="password">Password</label>
      <input type="Password" id="password" />
    </form>
  );
};

export default Form;
