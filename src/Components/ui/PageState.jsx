import { LuCircleAlert, LuLoaderCircle } from "react-icons/lu";

export const PageLoader = () => (
  <div className="flex justify-center py-24">
    <LuLoaderCircle aria-label="Loading" className="h-8 w-8 animate-spin text-green motion-reduce:animate-none" />
  </div>
);

export const PageError = ({ message = "Something went wrong loading this page.", onRetry }) => (
  <div className="flex flex-col items-center gap-3 py-24 text-center">
    <LuCircleAlert aria-hidden="true" className="h-10 w-10 text-red-500" />
    <p className="text-secondary">{message}</p>
    {onRetry && (
      <button type="button" onClick={onRetry} className="rounded-lg bg-buttonPrimary px-5 py-2.5 text-sm font-semibold text-white hover:bg-green">
        Try again
      </button>
    )}
  </div>
);