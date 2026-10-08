
import Header from '../Components/Header'
import Hero from '../LandingPageSubSections/Hero'
import AboutUs from '../LandingPageSubSections/AboutUs'
import OurSupport from '../LandingPageSubSections/OurSupport'
import HowItWorks from '../LandingPageSubSections/HowItWorks'
import ForPatients from '../LandingPageSubSections/ForPatients'
import ForDonors from '../LandingPageSubSections/ForDonors'

const LandingPage = () => {
  return (
    <div>
      <Header />
      <main className="relative top-16">
        <Hero />
        <div className="flex flex-col gap-2 px-4 md:px-6 lg:px-8 xl:px-16">
          <AboutUs />
          <OurSupport />
          <HowItWorks />
          <ForPatients />
          <ForDonors />
        </div>
      </main>
    </div>
  )
}

export default LandingPage