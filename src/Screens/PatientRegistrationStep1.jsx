import { useState } from "react";
import PatientRegistrationHeader from "../Components/PatientRegistrationHeader";
import LabeledInput from "../Components/LabeledInput";
import Button1 from "../Components/Button1";

const PatientRegistrationStep1 = () => {
  // one object that holds everything the user types
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  // runs every time the user types in ANY box
  // e.target.name tells us which box it was
  const handleChange = (e) => {
    const newForm = { ...form, [e.target.name]: e.target.value };
    setForm(newForm);
    // we log newForm (not form) because form is still the OLD value
    // at this moment, setForm only updates it on the next render
    console.log(newForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stops the page from refreshing

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    console.log(form);
    // later: go to Step 2
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <PatientRegistrationHeader />

      {/* flex-1 + justify-center = the form sits in the middle of the screen */}
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-[760px] flex-1 flex-col justify-center px-4 py-4"
      >
        {/* Title + step */}
        <div className="leading-[22px]">
          <p className="text-[20px] font-semibold text-green">
            Patient Registration
          </p>
          <p className="mt-1 text-[15px] text-secondary/80">Step 1 of 3</p>
        </div>

        <hr className="my-4 border-t-2 border-cardBg" />

        <h2 className="text-xl font-semibold text-secondary/80">
          Basic information
        </h2>
        <p className="mt-1 text-secondary/60">Tell us a little about yourself.</p>

        {/* The fields: 2 boxes per row (1 per row on small screens) */}
        <div className="mt-5 grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">
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

        {/* shows only when the passwords don't match */}
        {error && <p className="mt-3 text-center text-red-500">{error}</p>}

        {/* Next button (Button1 is the shared button) */}
        <button type="submit" className="mt-6 block w-full">
          <div className="mx-auto w-[63%]">
            <Button1 text="Next" />
          </div>
        </button>

        <p className="mt-4 text-center text-secondary/60">
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
