import React from 'react'
import SiteLayout from '../components/sitelayout'
import Home from './home'
import About from './about'
import Contact from './contact'
import Blog from './blog'
import Head from '../components/head'
import Project from './project'

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
      <h1 id="about"></h1>
      <About />
      <h1 id="project"></h1>
      <Project />
      <h1 id="contact"><br/><br/><br/></h1>
      <Contact />
    </SiteLayout>
  )
}

export default IndexPage
