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
import { Testimonial } from './components/testimonials'
import { Badges } from './components/badges'

type DataProps = { experiences: Array<ExperiencesProps>, projects: Array<ProjectsDataProps> }

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
        <Badges baseVelocity={7}>
          <img src="/badges/CCNA.png" alt="" />
          <img src="/badges/devops-fundamentals.png" className='h-36' alt="" />
          <img src="/badges/DISM.png" alt="" />
          <img src="/badges/Siemens.png" className='h-36' alt="" />
        </Badges>
        {data && <Projects projectsData={data.projects} />}
        <Skills />
        {data && <Experience experiences={data?.experiences} />}
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </ActiveSectionContextProvider>

  )
}

export default App
