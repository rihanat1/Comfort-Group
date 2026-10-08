import React from 'react'

const OurSupport = () => {
    const content=[
        {
            title:"Medical bill Support",
            subtitle:"Assisting patients with medical fees"
        },
        {
            title:"Medications support",
            subtitle:"Helping patients access essential medications."
        },
        {
           title:"Food Support",
           subtitle:"Providing nutritional support during a patient's healthcare journey."
        }
    ]
  return (
    <div className="bg-cardBg w-full mt-5 p-2 px-3 lg:py-5 pb-8 lg:pb-12 rounded-[1.5rem] xl:w-[85%] xl:mx-auto">
       <div className="flex flex-col gap-2 pt-4 lg:items-center">
         <p className="text-green text-[16px] uppercase">support provided</p>
        <p className="text-primary text-2xl font-semibold lg:text-3xl ">We provide support using donated funds</p>
        <p className="text-secondary text-[16px] lg:text-[18px] ml-4"><span className="lg:hidden">-</span> based on each patient's needs and eligibility</p>
       </div>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 mt-10">
            {
                content.map((item)=>
                    <div key={item.title} className="flex items-center gap-4 bg-white px-4 lg:py-4 md:px-2 py-2 rounded-lg shadow-md">
                        <div className="shrink-0 h-8 w-8 md:w-1 md:shrink-0 bg-green rounded-full"></div>
                        <div className="flex flex-col">
                            <p className="text-primary text-[18px] font-semibold whitespace-nowrap">{item.title}</p>
                            <p className="text-secondary text-[16px]">{item.subtitle}</p>
                        </div>
                    </div>
                
                )
            }
        </div>
    </div>
  )
}

export default OurSupport