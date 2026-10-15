import { useState } from "react";
import PatientRegistrationHeader from "../Components/PatientRegistrationHeader";
import InputField from "../Components/InputField";
import Button1 from "../Components/Button1";
import buildings from "../assets/Images/signin-buildings.png";

const SignIn = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
    
  };

  return (
    <div className="min-h-screen bg-white">
      <PatientRegistrationHeader />

      <div className="mx-auto flex max-w-[1203px] items-center justify-center gap-24 px-6 py-10">
      
        <img
          src={buildings}
          alt="Tall buildings"
          className="hidden h-[596px] w-[588px] shrink-0 rounded-3xl object-cover lg:block"
        />

       
        <form onSubmit={handleSubmit} className="w-full max-w-[491px]">
          <h1 className="text-[34px] font-semibold text-green">Welcome Back</h1>
          <p className="mt-2 text-secondary/60">
            Sign in to continue to your account.
          </p>

          <div className="mt-14 flex flex-col gap-10">
            <InputField
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

         
          <div className="mt-8 flex items-center justify-between">
            <label className="flex cursor-pointer items-center gap-3 text-secondary/60">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-6 w-6 cursor-pointer"
              />
              Remember me
            </label>
            <a href="#" className="text-secondary/60 underline">
              Forgot password?
            </a>
          </div>

          
          <button type="submit" className="mt-10 block w-full">
            <div className="mx-auto w-[84%]">
              <Button1 text="Sign In" />
            </div>
          </button>

          <p className="mt-6 text-center text-secondary/60">
            Don't have an account?{" "}
            <a href="#" className="font-semibold text-buttonPrimary underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
