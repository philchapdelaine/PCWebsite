import React from "react"
import { Link } from "gatsby"
import PageLayout from "../components/pagelayout"

const AboutPage = () => {
  return (
    <PageLayout>
      <h1>About Me</h1>
      <p>I'm Phil and I live in Vancouver</p>
      <p><Link to="/contact">Want to work with me?</Link></p>
    </PageLayout>
  )
}


export default AboutPage
