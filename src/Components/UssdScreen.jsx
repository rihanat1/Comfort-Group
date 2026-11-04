import { useState } from "react";
import { FiChevronRight, FiInfo, FiSmartphone } from "react-icons/fi";
import { IoWalletOutline } from "react-icons/io5";
import PaymentMethodHeader from "./PaymentMethodHeader";
import StepButton from "./StepButton";
import mtn from "../assets/Images/payment/mtn.png";
import airtel from "../assets/Images/payment/airtel.png";
import ninemobile from "../assets/Images/payment/ninemobile.png";
import glo from "../assets/Images/payment/glo.png";

// TEMPORARY: the dial codes are placeholders, use the real ones for each network
const networks = [
  { name: "MTN", text: "Dial *737*XXXX#", logo: <img src={mtn} alt="MTN" className="h-12 w-12 object-contain" /> },
  { name: "Airtel", text: "Dial *737*XXXX#", logo: <img src={airtel} alt="Airtel" className="h-12 w-12 object-contain" /> },
  { name: "9mobile", text: "Dial *737*XXXX#", logo: <img src={ninemobile} alt="9mobile" className="h-12 w-12 object-contain" /> },
  { name: "Glo", text: "Dial *737*XXXX#", logo: <img src={glo} alt="Glo" className="h-12 w-12 object-contain" /> },
  {
    name: "Mobile Money (Other)",
    text: "Use your mobile money app (e.g, Opay, PalmPay, etc.)",
    logo: (
      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-green/10 text-2xl text-green">
        <IoWalletOutline />
      </span>
    ),
  },
];

// Payment screen for "USSD / Mobile Money".
// Props: onBack (back to the summary), onDone (go to the thank you step)
const UssdScreen = ({ onBack, onDone }) => {
  // which network the donor tapped
  const [network, setNetwork] = useState("");

  const chooseNetwork = (name) => {
    setNetwork(name);
    console.log("Network chosen:", name);
  };

  return (
    <div>
      <PaymentMethodHeader
        icon={<FiSmartphone />}
        title="USSD / Mobile Money"
        text="Use your mobile phone to make a quick donation via USSD code or mobile money."
        onBack={onBack}
      />

      {/* green box with the list of networks */}
      <div className="mt-6 rounded-2xl bg-green/10 p-5 sm:p-6">
        <h2 className="text-lg font-semibold text-secondary/70">Choose Your Network</h2>
        <p className="mt-1 text-sm text-secondary/60">
          Select your mobile network or mobile money provider to get the USSD
          code or payment instructions.
        </p>

        <div className="mt-4 flex flex-col gap-3">
          {networks.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => chooseNetwork(item.name)}
              className={`flex items-center gap-4 rounded-xl border bg-white p-3 text-left ${
                network === item.name ? "border-green" : "border-secondary/20"
              }`}
            >
              {item.logo}
              <div className="flex-1">
                <p className="font-semibold text-secondary/70">{item.name}</p>
                <p className="text-sm text-secondary/60">{item.text}</p>
              </div>
              <FiChevronRight className="text-xl text-secondary/60" />
            </button>
          ))}
        </div>
      </div>

      {/* green note */}
      <div className="mt-6 flex items-start gap-3 rounded-xl bg-green/10 p-4 text-sm text-secondary/60">
        <FiInfo className="mt-0.5 shrink-0 text-lg text-green" />
        <p>
          Replace XXXX with the amount you want to donate. Follow the prompts on
          your phone to complete the payment.
        </p>
      </div>

      <StepButton text="Continue" disabled={network === ""} onClick={onDone} />
    </div>
  );
};

export default UssdScreen;
