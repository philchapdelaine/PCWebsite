import React from "react"
import { Link } from "gatsby"
import PageLayout from "../components/pagelayout"
import * as layoutStyles from "../components/layout.module.scss"

const HomePage = () => {

  return (
    <PageLayout>
      <div>
        <h5 className={layoutStyles.home} id="main"><br/><br/> HI, MY NAME IS</h5>
        <h1 className={layoutStyles.homename}>PHILIPPE CHAPDELAINE.</h1>
        <h2 className={layoutStyles.home}> I BUILD THINGS.</h2>
        <p className={layoutStyles.home}><Link to="/#contact">Get in touch.</Link></p>
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
