
import { GrNotes } from "react-icons/gr";
import Logo from "../assets/Images/Logo.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import Button1 from "../Components/Button1"

const PatientRegistration = () => {
  return (
    <div className=" h-screen ">
     <div className="border-b-2 sm:px-3 md:px-5 lg:px-12">
       <div className="flex mx-auto h-16  items-center justify-between  sm:gap-2  py-2 ">
       <div className="flex items-center">
         <img
          src={Logo}
          alt="logo"
          className="h-10 w-10 object-contain sm:h-10 sm:w-10"
        />
        <span className="text-sm font-bold text-primary min-[360px]:text-base min-[400px]:text-xl sm:text-2xl">
          <span className="text-green">Comfort</span>Group
        </span>
       </div>
      <MdKeyboardArrowLeft className="mr-2 sm:mr-0 text-[30px] cursor-pointer text-primary font-bold border-2 border-black " />
      </div>
     </div>
      <div className="mt-4 flex justify-center my-auto flex-col px-4 sm:px-5 md:px-7 lg:px-16 ">
          <div className=" w-full py-3 leading-[22px]">
            <p className="text-green text-[20px] font-semibold">Patient Registration</p>
            <p className="text-secondary/80 text-[15px]">Step 3 of 3</p>
          </div>
          <div className="flex items-center justify-center  mt-6 gap-8 flex-col">
         <div className="w-fit border relative bg-cardBg p-6 text-[50px]  rounded-full">
               <GrNotes className=" cursor-pointer text-buttonPrimary" />
               <IoShieldCheckmark className="absolute right-4 text-green text-[2.2rem] top-11" />
         </div>
         <div className="flex flex-col text-center">
          <p className="text-green capitalize text-2xl">verify your patient information</p>
         <p className="text-secondary/70">Your information will be reviewed to confirm your eligibility for patient support.</p>
         </div>
         <div className="bg-[#e6e6f0] w-[94%] md:w-[85%] lg:w-[75%] xl:w-[60%] rounded-lg px-4 py-9">
          <p className="text-[#979393] text-[20px] mb-3">What happens next?</p>
          <div className="flex flex-col gap-6">
            <p className="flex items-center gap-3 text-[#AEAEAE] "><GiCheckMark className="text-green" />Your details will be verified by our team</p>
            <p className="flex items-center gap-3 text-[#AEAEAE] "><GiCheckMark className="text-green" />You’ll receive a notification once approved</p>
            <p className="flex items-center gap-3 text-[#AEAEAE] "><GiCheckMark className="text-green" />Then you’ll be able to access your patient dashboard</p>
          </div>
         </div>
         <Button1 text="Submit for Verification" extraStyling="w-[80%] text-sm sm:text-[18px] sm:w-[70%] md:w-[60%] lg:w-[30%]"/>
          </div>
      </div>
    </div>
  );
};

export default PatientRegistration;
