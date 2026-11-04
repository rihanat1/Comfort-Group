import avatar from "../assets/Images/donor/avatar.png";
import bell from "../assets/Images/donor/bell-green.png";

// The white bar at the top: greeting on the left, bell + photo on the right
// Props: name - the name of the logged in user
const DonorHeader = ({ name }) => {
  // pick the greeting using the time of day
  const hour = new Date().getHours();
  let greeting = "Good evening";
  if (hour < 12) greeting = "Good morning";
  else if (hour < 17) greeting = "Good afternoon";

  return (
    <div className="flex items-center justify-between rounded-full bg-white px-6 py-3 shadow-[0_4px_14px_rgba(0,0,0,0.15)]">
      <div>
        <p className="text-xl font-semibold text-green">
          {greeting}, {name}
        </p>
        <p className="text-sm text-secondary/70">
          Thank you for helping patients get the care they deserve.
        </p>
      </div>

      <div className="flex items-center gap-4">
        {/* bell with the red number on top */}
        <div className="relative">
          <img src={bell} alt="notifications" className="h-6 w-6 object-contain" />
          <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
            3
          </span>
        </div>
        <img src={avatar} alt={name} className="h-12 w-12 rounded-full object-cover" />
      </div>
    </div>
  );
};

export default DonorHeader;
