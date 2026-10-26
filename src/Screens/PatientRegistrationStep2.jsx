import { useState } from "react";
import PatientRegistrationHeader from "../Components/PatientRegistrationHeader";
import LabeledInput from "../Components/LabeledInput";
import LabeledSelect from "../Components/LabeledSelect";
import Button1 from "../Components/Button1";

// TEMPORARY lists so the dropdowns work.
// Replace these with the real hospitals / departments / reasons later.
const hospitals = [
  "General Hospital",
  "Teaching Hospital",
  "Specialist Hospital",
  "Community Health Centre",
];
const departments = [
  "Cardiology",
  "Oncology",
  "Paediatrics",
  "Surgery",
  "Maternity",
  "Emergency",
];
const reasons = [
  "Medical bills",
  "Medication",
  "Transport",
  "Food and nutrition",
  "Other",
];

const PatientRegistrationStep2 = () => {
  // one object that holds everything the user picks or types
  const [form, setForm] = useState({
    hospital: "",
    patientId: "",
    department: "",
    reason: "",
  });

  // runs every time the user types or picks something
  const handleChange = (e) => {
    const newForm = { ...form, [e.target.name]: e.target.value };
    setForm(newForm);
    console.log(newForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stops the page from refreshing
    console.log(form);
    // later: go to Step 3
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <PatientRegistrationHeader />

      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-[760px] flex-1 flex-col justify-center px-4 py-3"
      >
        {/* Title + step */}
        <div className="leading-[22px]">
          <p className="text-[20px] font-semibold text-green">
            Patient Registration
          </p>
          <p className="mt-1 text-[15px] text-secondary/80">Step 2 of 3</p>
        </div>

        <hr className="my-3 border-t-2 border-cardBg" />

        <h2 className="text-xl font-semibold text-secondary/80">
          Patient Information
        </h2>
        <p className="mt-1 text-secondary/60">
          Please provide your hospital and patient details.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2">
          <LabeledSelect
            label="Hospital"
            name="hospital"
            placeholder="Select hospital"
            options={hospitals}
            value={form.hospital}
            onChange={handleChange}
          />
          <LabeledInput
            label="Patient ID"
            name="patientId"
            placeholder="Enter your patient ID"
            value={form.patientId}
            onChange={handleChange}
          />
          <LabeledSelect
            label="Department/Ward"
            name="department"
            placeholder="Select department"
            options={departments}
            value={form.department}
            onChange={handleChange}
          />
          <LabeledSelect
            label="Reason for Support"
            name="reason"
            placeholder="Select reason"
            options={reasons}
            value={form.reason}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="mt-6 block w-full">
          <div className="mx-auto w-[63%]">
            <Button1 text="Next" />
          </div>
        </button>

        <p className="mt-3 text-center text-secondary/60">
          Already have an account?{" "}
          <a href="#" className="font-semibold text-buttonPrimary underline">
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
};

export default PatientRegistrationStep2;
