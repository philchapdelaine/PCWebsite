import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Home from './home'
import About from './about'
import Contact from './contact'
import Blog from './blog'
import Footer from '../components/footer'

import Head from '../components/head'

const IndexPage = () => {

  return (
    <Layout>
      <Head />
      <h1><br/></h1>
      <Home />
      <About />
      <Contact />
      <Blog />
    </Layout>
  )
}

export default IndexPage
