import { Link } from "react-router-dom";

const PatientNotFound = () => (
  <section className="py-16 text-center">
    <h1 className="text-2xl font-semibold text-primary">Page not found</h1>
    <p className="mt-2 text-secondary">This page doesn't exist.</p>
    <Link to="/patient" className="mt-6 inline-block font-medium text-green hover:underline">
      Back to dashboard
    </Link>
  </section>
);

export default PatientNotFound;