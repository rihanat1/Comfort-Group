import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import DonorLayout from "../Components/DonorLayout";
import Card from "../Components/Card";
import DonateStepper from "../Components/DonateStepper";
import DonateAmountStep from "../Components/DonateAmountStep";
import DonatePurposeStep from "../Components/DonatePurposeStep";
import DonatePaymentStep from "../Components/DonatePaymentStep";
import DonateConfirmStep from "../Components/DonateConfirmStep";
import StepButton from "../Components/StepButton";

const stepNames = ["Amount", "Purpose", "Payment", "Confirmation"];

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
    setStep(1);
  };

  const handleConfirm = () => {
    console.log("Donation confirmed:", form);
    // later: send the donation to the backend here
    setStep(4);
  };

  return (
    <DonorLayout active="Donate">
      <Card className="mx-auto mt-6 max-w-[770px] p-5 sm:p-8">
        {/* top: back arrow, title and step name */}
        <div className="flex items-start gap-4">
          <button
            type="button"
            onClick={goBack}
            className="mt-1 text-xl text-secondary/60"
          >
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

        {/* show the step we are on */}
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
            <StepButton text="Confirm Donation" onClick={handleConfirm} />
          </>
        )}

        {step === 4 && <DonateConfirmStep form={form} onReset={reset} />}
      </Card>
    </DonorLayout>
  );
};

export default DonorDonateFlow;
