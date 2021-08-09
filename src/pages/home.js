import React from "react"
import { Link } from "gatsby"
import PageLayout from "../components/pagelayout"
import * as layoutStyles from "../components/layout.module.scss"

const HomePage = () => {

  return (
    <PageLayout>
      <div>
        <h5 className={layoutStyles.homeintro} id="main"><br/>Hi, my name is</h5>
        <h1 className={layoutStyles.homename}>Philippe Chapdelaine.</h1>
        <h2 className={layoutStyles.home}>I build things.</h2>
        <p><a className={layoutStyles.homecontact} href="https://www.linkedin.com/in/philippe-chapdelaine-b63561185/" target="_blank">Get in touch.</a></p>
      </div>
    </PageLayout>
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
