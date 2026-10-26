import SignIn from "./Screens/SignIn";
import SignUpRole from "./Screens/SignUpRole";
import PatientRegistrationStep1 from "./Screens/PatientRegistrationStep1";
import PatientRegistrationStep2 from "./Screens/PatientRegistrationStep2";
import SecurityVerification from "./Screens/SecurityVerification";

export default function App() {
  return (
    <>
      {/* Only the page WITHOUT the comment marks shows on screen */}
      {/* <SignIn /> */}
      {/* <SignUpRole /> */}
      <PatientRegistrationStep1 />
      {/* <PatientRegistrationStep2 /> */}
      {/* <SecurityVerification /> */}
    </>
  );
}