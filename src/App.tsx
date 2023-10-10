import { useState, useEffect } from 'react'

import Intro from "./components/intro"
import About from "./components/about"
import Projects, { ProjectsDataProps } from "./components/projects"
import Skills from "./components/skills"
import Experience, { ExperiencesProps } from "./components/experience"
import ActiveSectionContextProvider from "./context/active-section-context"
import Header from "./components/header"
import Contact from "./components/contact"
import Footer from "./components/footer"
import { Toaster } from "react-hot-toast"

type DataProps = { experiences: Array<ExperiencesProps>, projects: Array<ProjectsDataProps> }

function App() {
  const [data, setData] = useState<DataProps>()
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('portfolio.json');
        const data = await response.json();
        setData(data);
        console.log(data);
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
        <About />
        <Projects projectsData={data?.projects} />
        <Skills />
        <Experience experiences={data?.experiences} />
      </main>
      <Contact />
      <Footer />
      <Toaster position="top-right" />
    </ActiveSectionContextProvider>

  )
}

export default App
