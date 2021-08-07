import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import Head from '../components/head'


const HomePage = () => {

  return (
    <Layout>
      <h5 id="main"><br/><br/>Hi, my name is</h5>
      <h1>Philippe Chapdelaine.</h1>
      <h2>I build things.</h2>
      <p>Need a Developer? <Link to="/contact">Get in touch.</Link></p>
    </Layout>
  )

  // return (
  //   <div>
  //     <Header />
  //     <h1>Hello.</h1>
  //     <h2>I'm learning how to use Gatsby</h2>
  //     <p>Need a Developer? <a href="/contact">Contact me.</a></p>
  //     <p>Need a Developer? <Link to="/contact">Contact me.</Link></p>
  //     <Footer />
  // </div>
  // )
}

export default HomePage