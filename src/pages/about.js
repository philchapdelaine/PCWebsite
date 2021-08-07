import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>I'm Phil and I live in Vancouver</p>
      <p><Link to="/contact">Want to work with me?</Link></p>
    </Layout>
  )
}


export default AboutPage
