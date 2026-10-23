import { useState } from "react";
import PatientRegistrationHeader from "../Components/PatientRegistrationHeader";
import InputField from "../Components/InputField";
import Button1 from "../Components/Button1";
import buildings from "../assets/Images/signin-buildings.png";

const SignIn = () => {
  // one object that holds whatever the user types
  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  // runs every time the user types or ticks the checkbox
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // a checkbox gives us "checked", the other boxes give us "value"
    const newForm = { ...form, [name]: type === "checkbox" ? checked : value };
    setForm(newForm);
    console.log(newForm); // newForm, because form is still the old value here
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stops the page from refreshing
    console.log(form);
    // later: send these to the backend here
  };

  return (
    <div className="min-h-screen bg-white">
      <PatientRegistrationHeader />

      <div className="mx-auto flex max-w-[1203px] items-center justify-center gap-24 px-6 py-10">
        {/* Left: picture (hidden on small screens) */}
        <img
          src={buildings}
          alt="Tall buildings"
          className="hidden h-[596px] w-[588px] shrink-0 rounded-3xl object-cover lg:block"
        />

        {/* Right: the form */}
        <form onSubmit={handleSubmit} className="w-full max-w-[491px]">
          <h1 className="text-[34px] font-semibold text-green">Welcome Back</h1>
          <p className="mt-2 text-secondary/60">
            Sign in to continue to your account.
          </p>

          <div className="mt-14 flex flex-col gap-10">
            <InputField
              label="Email Address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
            <InputField
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          {/* Remember me + Forgot password */}
          <div className="mt-8 flex items-center justify-between">
            <label className="flex cursor-pointer items-center gap-3 text-secondary/60">
              <input
                type="checkbox"
                name="rememberMe"
                checked={form.rememberMe}
                onChange={handleChange}
                className="h-6 w-6 cursor-pointer"
              />
              Remember me
            </label>
            <a href="#" className="text-secondary/60 underline">
              Forgot password?
            </a>
          </div>

          {/* Button1 is the shared button from the other pages */}
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
