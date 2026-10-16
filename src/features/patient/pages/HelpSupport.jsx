import { FaWhatsapp } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";

const contents = [
  {
    title:"Contact Support",
    subtitle:"Chat with oursupport team for quick help",
    linkText:"Chat Now ->",
    icon:<FaWhatsapp />

  },
  {
    title:"Email Us",
    subtitle:"Send us an we will get back to you within 24 hours",
    linkText:"support@comforthealth.com",
    icon:<MdOutlineMail />

  },
  {
    title:"Call Us",
    subtitle:'Speak with our support team directly',
    linkText:"+234xxxxxxx",
    icon:<IoIosCall />

  }
]



const HelpSupport = () => (
  <section className="border-2 border-red-700 p-1 ">
    <div className=" grid grid-cols-1 gap-3 mb-16">
       {
        contents.map((content)=>
        <div key={content.title} className="border flex items-center gap-3 p-2 py-4 rounded-xl shadow-md">
          <div className="text-green text-2xl bg-green/10 p-3 h-fit rounded-full">{content.icon}</div>
         <div className="flex flex-col gap-1">
          <p className="text-[#AEAEAE] font-bold text-lg">{content.title}</p>
          <p className="text-[#9E9A9A] text-[16px]">{content.subtitle}</p>
          <p className="text-green/80 hover:text-green text-[16px] cursor-pointer">{content.linkText}</p>
         </div>
           
        </div>
        )
       }
    </div>
    <div className="border-2 border-pink-500">
      <div className="flex gap-3">
       <div className="text-green text-2xl bg-green/10 p-3 h-fit rounded-full"> <GrNotes /></div>
       <p className="text-[#A1A5A5]"></p>

      </div>
    </div>
  </section>
);

export default HelpSupport;