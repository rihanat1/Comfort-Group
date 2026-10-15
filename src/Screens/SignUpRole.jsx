import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Logo from "../assets/Images/Logo.png";
import RoleCard from "../Components/RoleCard";
import Button1 from "../Components/Button1";
import patientIcon from "../assets/Images/roles/role-patient.png";
import donorIcon from "../assets/Images/roles/role-donor.png";
import vendorIcon from "../assets/Images/roles/role-vendor.png";

// the three cards, kept in a list so we can loop over them
const roles = [
  {
    id: "patient",
    name: "Patient",
    icon: patientIcon,
    description:
      "I am receiving care at a patient hospital and would like to access patient support.",
  },
  {
    id: "donor",
    name: "Donor",
    icon: donorIcon,
    iconSize: "h-10 w-10",
    description: "I want to support patients by contributing to cause.",
  },
  {
    id: "vendor",
    name: "Vendor",
    icon: vendorIcon,
    ownCircle: true, // this picture already has its own circle
    description:
      "I want to support patients by providing essential products and services.",
  },
];

const SignUpRole = () => {
  // which card is chosen (patient is chosen by default)
  const [selectedRole, setSelectedRole] = useState("patient");

  const handleContinue = () => {
    console.log("Chosen role:", selectedRole);
    // later: go to the next sign up page for this role
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1203px] px-6 py-6">
        {/* back button */}
        <button
          type="button"
          className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-cardBg/60"
        >
          <MdKeyboardArrowLeft className="text-[28px] text-secondary/70" />
        </button>

        {/* logo + tagline */}
        <div className="mt-4 flex flex-col items-center">
          <div className="flex items-center">
            <img src={Logo} alt="logo" className="h-14 w-14 object-contain" />
            <span className="text-3xl font-bold text-primary">
              <span className="text-green">Comfort</span>Group
            </span>
          </div>
          <p className="mt-2 text-secondary/70">Support Today. Health Tomorrow.</p>
        </div>

        {/* titles */}
        <div className="mt-12 text-center">
          <h1 className="text-[34px] font-bold text-secondary/70">
            Create Your Account
          </h1>
          <p className="mt-3 text-secondary/60">
            Join our community and access the support or giving experience that
            works for you
          </p>
          <h2 className="mt-14 text-xl font-semibold text-secondary/70">
            How would you like to join us?
          </h2>
        </div>

        {/* the three cards */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {roles.map((role) => (
            <RoleCard
              key={role.id}
              icon={role.icon}
              roleName={role.name}
              description={role.description}
              iconSize={role.iconSize}
              ownCircle={role.ownCircle}
              selected={selectedRole === role.id}
              onClick={() => setSelectedRole(role.id)}
            />
          ))}
        </div>

        {/* Continue button */}
        <div
          onClick={handleContinue}
          className="mx-auto mt-14 w-full max-w-[464px]"
        >
          <Button1 text="Continue" />
        </div>

        <p className="mt-6 text-center text-secondary/60">
          Already have an account?{" "}
          <a href="#" className="font-semibold text-buttonPrimary underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpRole;
