import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import DonorLayout from "../Components/DonorLayout";
import Card from "../Components/Card";
import DonateStepper from "../Components/DonateStepper";
import DonateAmountStep from "../Components/DonateAmountStep";
import DonatePurposeStep from "../Components/DonatePurposeStep";
import DonatePaymentStep from "../Components/DonatePaymentStep";
import DonateConfirmStep from "../Components/DonateConfirmStep";
import BankTransferScreen from "../Components/BankTransferScreen";
import CardPaymentScreen from "../Components/CardPaymentScreen";
import UssdScreen from "../Components/UssdScreen";
import StepButton from "../Components/StepButton";

const stepNames = ["Amount", "Purpose", "Payment", "Confirmation"];

// TEMPORARY: later this comes from the logged in donor
const donorName = "Darrell Steward";

// what the donor chooses starts like this
const startingForm = {
  amount: "25000", // the amount (as text)
  customAmount: "", // what they typed in "Other Amount"
  frequency: "One-time Donation",
  purpose: "",
  anonymous: false,
  paymentMethod: "Bank Transfer",
};

const DonorDonateFlow = () => {
  // which step we are on: 1, 2, 3 or 4
  const [step, setStep] = useState(1);
  // everything the donor has chosen, in one object
  const [form, setForm] = useState(startingForm);
  // step 3 has 2 screens: the summary, then the payment screen.
  // true = we are on the payment screen (Bank / Card / USSD)
  const [onPayScreen, setOnPayScreen] = useState(false);
  // the transaction id and date, made when the donation is confirmed
  const [receipt, setReceipt] = useState({ id: "", date: "" });

  // saves a change, for example updateForm({ purpose: "Food Support" })
  const updateForm = (changes) => {
    const newForm = { ...form, ...changes };
    setForm(newForm);
    console.log(newForm); // so we can watch it in the console
  };

  const goBack = () => {
    if (step > 1 && step < 4) setStep(step - 1);
  };

  // start again from step 1
  const reset = () => {
    setForm(startingForm);
    setOnPayScreen(false);
    setStep(1);
  };

  // the donor finished paying
  const finishPayment = () => {
    const now = new Date();
    // TEMPORARY: the backend will make the real transaction id
    const id =
      "CBT" + now.toISOString().slice(0, 10).replace(/-/g, "") +
      "-" + Math.floor(1000 + Math.random() * 9000);
    const date =
      now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
      " • " +
      now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

    setReceipt({ id, date });
    console.log("Donation confirmed:", form);
    // later: send the donation to the backend here
    setOnPayScreen(false);
    setStep(4);
  };

  // the name used on the bank transfer reference
  const referenceName = form.anonymous ? "Anonymous" : donorName;

  return (
    <DonorLayout active="Donate">
      <Card className="mx-auto mt-6 max-w-[770px] p-5 sm:p-8">
        {/* the payment screens (Bank / Card / USSD) take over the whole box */}
        {step === 3 && onPayScreen && form.paymentMethod === "Bank Transfer" && (
          <BankTransferScreen
            donorName={referenceName}
            onBack={() => setOnPayScreen(false)}
            onDone={finishPayment}
          />
        )}
        {step === 3 && onPayScreen && form.paymentMethod === "Card Payment" && (
          <CardPaymentScreen onBack={() => setOnPayScreen(false)} onDone={finishPayment} />
        )}
        {step === 3 && onPayScreen && form.paymentMethod === "USSD / Mobile Money" && (
          <UssdScreen onBack={() => setOnPayScreen(false)} onDone={finishPayment} />
        )}

        {/* every other screen has the title and the 1-2-3-4 bar on top */}
        {!(step === 3 && onPayScreen) && (
          <>
            <div className="flex items-start gap-4">
              <button type="button" onClick={goBack} className="mt-1 text-xl text-secondary/60">
                <FiArrowLeft />
              </button>
              <div>
                <h1 className="text-2xl font-semibold text-secondary/60">Donate</h1>
                <p className="text-sm text-secondary/60">
                  Step {step} of 4 - {stepNames[step - 1]}
                </p>
              </div>
            </div>

            <DonateStepper current={step} />

            {step === 1 && (
              <>
                <DonateAmountStep form={form} updateForm={updateForm} />
                <StepButton
                  text="Next"
                  disabled={Number(form.amount) <= 0}
                  onClick={() => setStep(2)}
                />
              </>
            )}

            {step === 2 && (
              <>
                <DonatePurposeStep form={form} updateForm={updateForm} />
                <StepButton
                  text="Continue to Payment"
                  disabled={form.purpose === ""}
                  onClick={() => setStep(3)}
                />
              </>
            )}

            {step === 3 && (
              <>
                <DonatePaymentStep form={form} updateForm={updateForm} />
                <StepButton text="Confirm Donation" onClick={() => setOnPayScreen(true)} />
              </>
            )}

            {step === 4 && (
              <DonateConfirmStep
                form={form}
                receipt={receipt}
                firstName={donorName.split(" ")[0]}
                onReset={reset}
              />
            )}
          </>
        )}
      </Card>
    </DonorLayout>
  );
};

export default DonorDonateFlow;
