import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import PatientRegistrationHeader from "../Components/PatientRegistrationHeader";
import Button1 from "../Components/Button1";
import Button2 from "../Components/Button2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Data = {
  name: "",
  email: "",
  password: "",
};

const LogInSignUpPage = () => {
  const { role } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState(Data)
  const [toggle, setToggle] = useState(false)

  if (role !== "donor" && role !== "patient") {
    return <Navigate to="/" replace />
  }

  function handleToggle(){
    setToggle(!toggle)
  }

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("form:", form, "role:", role);
    //pls remember to add navigation based on role here once donor and patient dadhboard is done
  }

  const isPatient = role === "patient";

  const heading = isPatient
    ? "Log in to access your patient dashboard"
    : "Log in to access your donor dashboard";

  const subtext = isPatient
    ? "Request support, track your status, and manage your account."
    : "Give with confidence and track the impact of every donation.";

  return (
    <div className="min-h-screen bg-gray-50">
      <PatientRegistrationHeader />

      <div className="flex justify-center px-4 py-10 sm:px-6 sm:py-14 ">
        <div className="w-full  md:max-w-2xl lg:max-w-3xl">
         
          <div className="lg:pb-20 bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary leading-tight">
              {heading}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-secondary leading-relaxed">
              {subtext}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
             
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-primary"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleForm}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm sm:text-base text-primary placeholder:text-gray-400 outline-none"
                />
              </div>

            
              <div className="flex flex-col gap-1.5 relative">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-primary"
                  >
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => navigate("/forgot-password")}
                    className="text-xs sm:text-sm text-buttonPrimary hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <input
                  id="password"
                  type={toggle ? "password" : "text"}
                  name="password"
                  value={form.password}
                  onChange={handleForm}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm sm:text-base text-primary placeholder:text-gray-400 outline-none "
                />
                <div
                 onClick={handleToggle} className="absolute w-fit bottom-3 text-lg right-2">{
                  toggle ? <FaEyeSlash/> : <FaEye/> 
                  }</div>
              </div>

              <Button1 type="submit" text="Log In" />
            </form>


            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs text-gray-500 uppercase tracking-wide">
                or
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

        
            <p className="text-sm text-secondary text-center mb-3">
              New here?
            </p>
            <Button2
              text="Create new account"
              extraStyling="border-green hover:bg-green hover:text-white text-primary"
            />
          </div>

      
          
        </div>
      </div>
    </div>
  );
};

export default LogInSignUpPage;