import { cn } from "../../../lib/cn.js";

const Avatar = ({ name = "", src, className }) => {
  const initials = name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();
  return src ? (
    <img src={src} alt="" className={cn("rounded-full object-cover", className)} />
  ) : (
    <span aria-hidden="true" className={cn("flex items-center justify-center rounded-full bg-green/15 font-semibold text-green", className)}>
      {initials || "?"}
    </span>
  );
};

export default Avatar;