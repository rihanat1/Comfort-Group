import holdingphonenew from "../assets/Images/holdingphonenew.png"

const HowItWorks = () => {
    const content=[
        {
            title:"Sign up",
            subtitle:"Create an account by entering your basic information to access your dashboard"
        },
        {
            title:"Make a request",
            subtitle:"Patients and their loved ones can submit a request through the Request section on the dashboard by entering the patient's information."
        },
        {
            title:"Request review",
            subtitle:"Once a request is submitted, our team will review it with the hospital they are currently admitted to determine the patient's eligibility for support."
        },
        {
            title:"Support provided",
            subtitle:"If the patient is eligible, we will allocate figures on patient's dashboard based on their needs using the donated funds available."
        },
        {
            title:"Receive support",
            subtitle:"Patients can then use their allocated funds to pay for medical bills or food with any suitable vendor on the platform."
        }
    ]
  return (
    <div className='mt-8 flex flex-col gap-5 lg:gap-0 lg:mb-6 xl:w-[92%] xl:mx-auto'>
        <div className="flex flex-col gap-4 lg:gap-2  lg:items-center ">
            <p className="text-green text-[16px] uppercase">How it works</p>
        <p className="text-primary text-2xl font-semibold lg:text-3xl lg:mb-4">Simple Support. Clear Process.</p>
        </div>
        <div className=" bg-buttonPrimary text-white grid grid-cols-1 lg:grid-cols-5 gap-2 lg:gap-5 lg:py-7 rounded-xl lg:rounded-t-xl lg:rounded-b-none">
            {
               content.map((item)=>
                <div className={`border-b border-white/20 p-3 text-white flex items-center gap-4 lg:gap-2 lg:border-b-0 lg:pl-2 lg:border-r lg:flex-col lg:items-start ${item==content.length-1 ? "border-b-0 lg:border-r-0" : ""}`} key={item.title}>
                    <div className=" h-6 w-6 shrink-0 rounded-lg border-2 border-green "></div>
                    <div className="flex flex-col ">
                            <p className="font-semibold  text-[18px] ">{item.title}</p>
                            <p className="text-white/60 text-[15px]">{item.subtitle}</p>
                        </div>
                </div> 
            )}
        </div>
         <div className="hidden lg:block w-full rounded-b-xl overflow-hidden">
                <img src={holdingphonenew} alt="" className="object-cover object-center h-[230px] w-full " />
            </div>
    </div>
  )
}

export default HowItWorks