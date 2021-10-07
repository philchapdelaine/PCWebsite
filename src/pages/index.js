import React from 'react'
import SiteLayout from '../components/sitelayout'
import Home from './home'
import About from './about'
import Contact from './contact'
import Head from '../components/head'
import Project from './project'
import Experience from './experience'

if (typeof window !== "undefined") {
   // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const IndexPage = () => {

  return (
    <SiteLayout>
      <Head />
      <h1 id="home"><br/><br/><br/></h1>
      <Home />
      <h1 id="about"><br/><br/><br/><br/><br/></h1>
      <About />
      <h1 id="project"><br/><br/><br/><br/></h1>
      <Project />
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <h1 id="experience"><br/><br/><br/><br/></h1>
      <Experience />
      <h1 id="contact"><br/><br/></h1>
      <Contact />
    </SiteLayout>
  )
}

export default IndexPage
