import { useState, useEffect } from 'react'

import { Intro } from "./components/intro"
import { About } from "./components/about"
import { Projects, ProjectsDataProps } from "./components/projects"
import { Skills } from "./components/skills"
import { Experience, ExperiencesProps } from "./components/experience"
import { ActiveSectionContextProvider } from "./context/active-section-context"
import { Header } from "./components/header"
import Contact from "./components/contact-form"
import Footer from "./components/footer"
import { Toaster } from "react-hot-toast"
import { TrustedBy } from './components/trustedBy'
import { Badges } from './components/badges'
import { Testimonial2 } from './components/testimonial2'
import Services from './components/services'
import { ServiceProps } from './components/service'

type DataProps = { experiences: Array<ExperiencesProps>, projects: Array<ProjectsDataProps>, services: Array<ServiceProps> }

const App = () => {
  const [data, setData] = useState<DataProps>()
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('portfolio.json');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <ActiveSectionContextProvider>
      <Header />
      <main className='flex flex-col items-center px-4'>
        <Intro />
        <TrustedBy />
        <About />
        {data && <Services serviceData={data.services} />}
        <Badges baseVelocity={7}>
          <img loading="lazy" src="/badges/ITIL.png" className='h-36' alt="" />
          <img loading="lazy" src="/badges/CCNA.png" alt="" />
          <img loading="lazy" src="/badges/devops-fundamentals.png" className='h-36' alt="" />
          <img loading="lazy" src="/badges/DISM.png" alt="" />
          <img loading="lazy" src="/badges/Siemens.png" className='h-36' alt="" />

        </Badges>
        {data && <Projects projectsData={data.projects} />}
        <Skills />
        {data && <Experience experiences={data.experiences} />}
        <Testimonial2 />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </ActiveSectionContextProvider>

  )
}

export default App
