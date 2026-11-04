import { useState } from "react";
import { FiCreditCard, FiHelpCircle, FiLock, FiChevronDown } from "react-icons/fi";
import PaymentMethodHeader from "./PaymentMethodHeader";
import StepButton from "./StepButton";
import visa from "../assets/Images/payment/visa.png";
import mastercard from "../assets/Images/payment/mastercard.png";
import verve from "../assets/Images/payment/verve.png";

// One input box with the label above and an optional icon on the right
// (only used on this screen, so it lives in this file)
const Field = ({ label, name, placeholder, value, onChange, icon }) => {
  return (
    <div className="w-full">
      <label className="mb-1 block text-sm text-secondary/70">{label}</label>
      <div className="relative">
        <input
          name={name}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="h-12 w-full rounded-lg border border-secondary/50 px-4 pr-12 text-primary outline-none placeholder:text-secondary/30 focus:border-buttonPrimary"
        />
        {icon && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-secondary/60">
            {icon}
          </span>
        )}
      </div>
    </div>
  );
};

// Payment screen for "Card Payment".
// Props: onBack (back to the summary), onDone (paid, go to the thank you step)
const CardPaymentScreen = ({ onBack, onDone }) => {
  const [card, setCard] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    cardName: "",
  });

  // runs every time the donor types in a box
  const handleChange = (e) => {
    const { name } = e.target;
    let value = e.target.value;

    if (name === "cardNumber") {
      // keep only numbers (max 16) and put a space after every 4
      const digits = value.replace(/\D/g, "").slice(0, 16);
      value = digits.replace(/(.{4})/g, "$1 ").trim();
    }
    if (name === "expiry") {
      // keep only numbers (max 4) and add the "/" after the month
      const digits = value.replace(/\D/g, "").slice(0, 4);
      value = digits.length > 2 ? digits.slice(0, 2) + "/" + digits.slice(2) : digits;
    }
    if (name === "cvv") {
      value = value.replace(/\D/g, "").slice(0, 4);
    }

    const newCard = { ...card, [name]: value };
    setCard(newCard);

    // We do NOT log the real card number or CVV, even for testing.
    // We only log how many digits were typed.
    console.log({
      cardNumberDigits: newCard.cardNumber.replace(/\s/g, "").length,
      expiry: newCard.expiry,
      cvvDigits: newCard.cvv.length,
      cardName: newCard.cardName,
    });
  };

  // Pay Now only works when everything is filled in properly
  const ready =
    card.cardNumber.length === 19 && // 16 digits + 3 spaces
    card.expiry.length === 5 &&
    card.cvv.length >= 3 &&
    card.cardName.trim() !== "";

  return (
    <div>
      <PaymentMethodHeader
        icon={<FiCreditCard />}
        title="Card Payment"
        text="Pay securely with Visa, Mastercard, Verve or other supported card."
        onBack={onBack}
      />

      {/* secure payment note */}
      <div className="mt-6 flex items-start gap-4 rounded-xl bg-green/10 p-5">
        <FiLock className="mt-1 shrink-0 text-3xl text-green" />
        <div>
          <p className="text-lg font-semibold text-secondary/70">Secure Payment</p>
          <p className="text-sm text-secondary/60">
            Your card details are encrypted and protected. We do not store your
            card information.
          </p>
        </div>
      </div>

      <h2 className="mt-8 text-xl font-semibold text-secondary/70">Enter Card Details</h2>

      <div className="mt-4 flex flex-col gap-5">
        <Field
          label="Card Number"
          name="cardNumber"
          placeholder="1234 5678 9012 3456"
          value={card.cardNumber}
          onChange={handleChange}
          icon={<FiCreditCard />}
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field
            label="Expiry Date"
            name="expiry"
            placeholder="MM/YY"
            value={card.expiry}
            onChange={handleChange}
          />
          <Field
            label="CVV"
            name="cvv"
            placeholder="123"
            value={card.cvv}
            onChange={handleChange}
            icon={<FiHelpCircle />}
          />
        </div>
        <Field
          label="Cardholder Name"
          name="cardName"
          placeholder="Name as on card"
          value={card.cardName}
          onChange={handleChange}
        />
      </div>

      {/* the card logos */}
      <h2 className="mt-8 text-lg font-semibold text-secondary/70">
        Supported Card Networks
      </h2>
      <div className="mt-3 flex items-center gap-5">
        <img src={visa} alt="Visa" className="h-6" />
        <img src={mastercard} alt="Mastercard" className="h-7" />
        <FiCreditCard className="text-3xl text-buttonPrimary" />
        <img src={verve} alt="Verve" className="h-7" />
        <FiChevronDown className="text-xl text-secondary/60" />
      </div>

      <StepButton
        text={
          <>
            <FiLock /> Pay Now
          </>
        }
        disabled={!ready}
        onClick={onDone}
      />
    </div>
  );
};

export default CardPaymentScreen;
