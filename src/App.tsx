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
        <TrustedBy baseVelocity={8} >
          <img className='dark:p-2 rounded-lg dark:bg-slate-50/75 w-44 ' src="public\logo\Qualcomm-Logo.svg" alt="" />
          <img className='dark:p-2 rounded-lg dark:bg-slate-50/75 w-44 ' src="public\logo\Siemens-logo.svg" alt="" />
          <img className='dark:p-2 rounded-lg dark:bg-slate-50/75 w-44 ' src="public\logo\Tek-experts.svg" alt="" />
          <img className='dark:p-2 rounded-lg dark:bg-slate-50/75 ' src="public\logo\viepos.png" alt="" />
          <img className='dark:p-2 rounded-lg dark:bg-slate-50/75 w-44' src="public\logo\Web888.png" alt="" />
          <img className='dark:p-2 rounded-lg dark:bg-slate-50/75 ' src="public\logo\BTSserv.png" alt="" />
        </TrustedBy>

        <About />
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
