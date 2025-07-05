import React from 'react'
import Hero from '../Components/Hero'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Projects from './Projects'
import ContactMe from './ContactMe'


const HomePae = () => {
  return (
    <>
     <Hero/>
     <div className="my-20"></div>
      <AboutMe />
       <div className="my-20"></div>
       <Skills />
        <div className="my-20"></div>
      <Projects />
       <div className="my-20"></div>
      <ContactMe />
    </>
  
  )
}

export default HomePae