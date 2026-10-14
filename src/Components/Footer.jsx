import React from "react";

const Footer = () => {
  const content = [
    {
      title: "Organization",
      items: [
        "About Us",
        "Our Support",
        "How It Works",
        "For Patients",
        "For Donors",
      ],
    },
    {
      title: "Get Support",
      items: ["Patient Support", "Apply For Support", "FAQ"],
    },
    {
      title: "Give",
      items: [ "Donor Login","Donate", "Volunteer"],
    },
    {
      title: "Connect",
      items: ["instagram", "facebook", "Linkedin", "X"],
    },
  ];
  return (
    <div className="px-4 sm:pb-10 md:px-6 lg:px-10 xl:px-20  mt-14 bg-footerBg text-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10 ">
        {content.map((item, i) => (
          <div key={i} className=" ">
            <p className="text-lg font-semibold mb-2 xl:text-center">{item.title}</p>
            <ul className="flex flex-col gap-2 xl:items-center">
              {item.items.map((li, j) => (
                <li
                  key={j}
                  className="text-sm text-white/80 hover:text-green cursor-pointer"
                >
                  {li}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center border-t border-white/20 py-4 text-sm">
        <p className="w-full text-white/80">
          © 2026 ComfortGroup. All rights reserved.
        </p>
        <div className="flex gap-2 text-white/80">
          <p className="whitespace-nowrap">Privacy Policy</p>
          <p className="whitespace-nowrap">Terms of Use</p>
          <p className="whitespace-nowrap">Accessibility</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
