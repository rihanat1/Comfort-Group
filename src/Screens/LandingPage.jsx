
import Header from '../Components/Header'
import Hero from '../LandingPageSubSections/Hero'
import AboutUs from '../LandingPageSubSections/AboutUs'
import OurSupport from '../LandingPageSubSections/OurSupport'
import HowItWorks from '../LandingPageSubSections/HowItWorks'
import ForPatients from '../LandingPageSubSections/ForPatients'
import ForDonors from '../LandingPageSubSections/ForDonors'
import Impact from '../LandingPageSubSections/Impact'
import Faq from '../LandingPageSubSections/Faq'
import Footer from '../Components/Footer'
import { useEffect, useState } from 'react'
import DonateModal from '../Components/DonateModal'


const LandingPage = () => {
  useEffect(() => {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);
}, []);
  const [isDonateOpen, setIsDonateOpen] = useState(false);
   const openDonateModal = () => setIsDonateOpen(true);
   const closeDonatemodal = ()=> setIsDonateOpen(false)
  return (
    <div>
      <Header onDonateClick={openDonateModal} />
      <main className="relative top-16">
        <Hero />
        <div className="flex flex-col gap-2 px-3 sm:px-5 md:px-6 lg:px-7 xl:px-11">
          <AboutUs />
          <OurSupport />
          <HowItWorks />
          <ForPatients />
          <ForDonors onDonateClick={openDonateModal} />
          {/* <Impact/> */}
       <Faq/>
        </div>
      </main>
       <DonateModal isOpen={isDonateOpen} onClose={closeDonatemodal}  />
      <Footer/>
    </div>
  )
}

export default LandingPage