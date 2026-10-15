import { useState } from "react";
import PatientRegistrationHeader from "../Components/PatientRegistrationHeader";
import LabeledInput from "../Components/LabeledInput";
import Button1 from "../Components/Button1";

const PatientRegistrationStep1 = () => {
  
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    console.log(form);
   
  };

  return (
    <div className="min-h-screen bg-white">
      <PatientRegistrationHeader />

      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-[693px] px-4 py-8"
      >
        {/* Title + step */}
        <div className="leading-[22px]">
          <p className="text-[20px] font-semibold text-green">
            Patient Registration
          </p>
          <p className="mt-1 text-[15px] text-secondary/80">Step 1 of 3</p>
        </div>

        <hr className="my-6 border-t-2 border-cardBg" />

        <h2 className="text-xl font-semibold text-secondary/80">
          Basic information
        </h2>
        <p className="mt-1 text-secondary/60">Tell us a little about yourself.</p>

        {/* The fields */}
        <div className="mt-8 flex flex-col gap-8">
          <LabeledInput
            label="Full Name"
            name="fullName"
            placeholder="Enter your full name"
            value={form.fullName}
            onChange={handleChange}
          />
          <LabeledInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={form.email}
            onChange={handleChange}
          />
          <LabeledInput
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={form.phone}
            onChange={handleChange}
          />
          <LabeledInput
            label="Date of Birth"
            name="dob"
            placeholder="DD/MM/YYYY"
            value={form.dob}
            onChange={handleChange}
          />

       
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-5">
            <LabeledInput
              label="Password"
              name="password"
              type="password"
              placeholder="Create a password"
              value={form.password}
              onChange={handleChange}
            />
            <LabeledInput
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>

        
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}

       
        <button type="submit" className="mt-10 block w-full">
          <div className="mx-auto w-[63%]">
            <Button1 text="Next" />
          </div>
        </button>

        <p className="mt-5 text-center text-secondary/60">
          Already have an account?{" "}
          <a href="#" className="font-semibold text-buttonPrimary underline">
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
};

export default PatientRegistrationStep1;
