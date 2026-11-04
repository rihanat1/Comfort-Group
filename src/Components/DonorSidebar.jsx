import { FiHome, FiBell, FiHelpCircle, FiLogOut, FiChevronDown } from "react-icons/fi";
import { BsGraphUp } from "react-icons/bs";
import Logo from "../assets/Images/Logo.png";
import avatar from "../assets/Images/donor/avatar.png";
import heartIcon from "../assets/Images/donor/icon-heart.png";
import historyIcon from "../assets/Images/donor/icon-history.png";
import doctorIcon from "../assets/Images/donor/icon-doctor.png";
import updatesIcon from "../assets/Images/donor/icon-updates.png";
import profileIcon from "../assets/Images/donor/icon-profile.png";

// every link in the sidebar, kept in a list so we can loop over it
// (some icons are pictures, some come from react-icons)
const menuItems = [
  { label: "Dashboard", icon: <FiHome className="text-xl" /> },
  { label: "Donate", icon: <img src={heartIcon} alt="" className="h-5 w-5 object-contain" /> },
  { label: "Donation History", icon: <img src={historyIcon} alt="" className="h-5 w-5 object-contain" /> },
  { label: "My Impact", icon: <BsGraphUp className="text-xl" /> },
  { label: "Supported Patients", icon: <img src={doctorIcon} alt="" className="h-5 w-5 object-contain" /> },
  { label: "Updates", icon: <img src={updatesIcon} alt="" className="h-5 w-5 object-contain" /> },
  { label: "Notification", icon: <FiBell className="text-xl" />, badge: 3 },
  { label: "Profile", icon: <img src={profileIcon} alt="" className="h-5 w-5 object-contain" /> },
  { label: "Help & Support", icon: <FiHelpCircle className="text-xl" /> },
];

// Props:
//   active - the label of the page we are on, for example "Dashboard"
//            (that link turns green)
//   name   - the name of the logged in user
const DonorSidebar = ({ active, name }) => {
  return (
    // hidden on small screens, shown from "lg" upwards
    <aside className="sticky top-0 hidden h-screen w-[290px] shrink-0 flex-col bg-buttonPrimary px-6 py-6 text-white lg:flex">
      {/* Logo */}
      <div className="flex items-center justify-center">
        <img src={Logo} alt="logo" className="h-11 w-11 object-contain" />
        <span className="text-2xl font-bold">
          <span className="text-green">Comfort</span>Group
        </span>
      </div>

      {/* The person who is logged in */}
      <div className="mt-6 flex items-center gap-3">
        <img src={avatar} alt={name} className="h-14 w-14 rounded-full object-cover" />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="flex items-center gap-1 text-xs text-green">
            Donor <FiChevronDown />
          </p>
        </div>
      </div>

      {/* The links */}
      <nav className="mt-6 flex flex-1 flex-col gap-1 overflow-y-auto">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex items-center gap-4 rounded-xl px-4 py-2.5 text-sm font-medium ${
              active === item.label ? "bg-green" : "hover:bg-white/10"
            }`}
          >
            <span className="flex w-6 justify-center">{item.icon}</span>
            {item.label}
            {item.badge && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green text-xs">
                {item.badge}
              </span>
            )}
          </a>
        ))}
      </nav>

      {/* Logout */}
      <button
        type="button"
        className="mt-4 flex w-full items-center justify-center gap-3 rounded-lg bg-[#ff383c] py-3 text-sm font-semibold"
      >
        <FiLogOut className="text-lg" />
        Logout
      </button>
    </aside>
  );
};

export default DonorSidebar;
