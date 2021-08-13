import React from "react"
import { Link } from "gatsby"
import PageLayout from "../components/pagelayout"
import * as layoutStyles from "../components/layout.module.scss"

import { Parallax  } from 'react-scroll-parallax';
import Satellite from "../images/satellite.svg";
import { useSpring, animated } from 'react-spring'

const satelliteStyles = {
    float: 'right'
  }

const Motion = () => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  return <animated.div style={props}>I will fade in</animated.div>
}

const HomePage = () => {

  return (
    <PageLayout>
      <div>
        <h5 className={layoutStyles.homeintro} id="main"><br/>Hi, my name is</h5>
        <h1 className={layoutStyles.homename}>Philippe Chapdelaine.</h1>
        <h2 className={layoutStyles.home}>I build things.</h2>
        <button className={layoutStyles.homebtn}>
          <a className={layoutStyles.btnLink} href="https://www.linkedin.com/in/philippe-chapdelaine-b63561185/" target="_blank">Get in touch.</a>
        </button>
        <Parallax  y={[ 120, -300 ]} styleInner={satelliteStyles}>
          <Satellite />
        </Parallax>
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
