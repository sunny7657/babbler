import Background from "@/components/Background";

const AuthPage = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center text-opacity-90 ">
      <Background>
        <div className="w-[80vw] h-[40vw] bg-blue/50 shadow-2xl rounded-3xl backdrop-blur-sm flex justify-center items-center">
          <h1 className="text-5xl font-bold">Welcome</h1>
        </div>
      </Background>
    </div>
  );
};

export default AuthPage;
