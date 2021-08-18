import React from "react"
import PageLayout from "../components/pagelayout"
import * as layoutStyles from "../components/layout.module.scss"

import { Parallax  } from 'react-scroll-parallax'
import Satellite from "../images/satellite.svg"
import { useChain, useSpringRef, useSpring, animated } from 'react-spring'

const satelliteStyles = {
    float: 'right'
  }

const HomePage = () => {

  // Build a spring and catch its ref
  const firstRef = useSpringRef()
  const first = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, ref: firstRef })
  // Build a transition and catch its ref
  const secondRef = useSpringRef()
  const second = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, ref: secondRef })
  // Build a transition and catch its ref
  const thirdRef = useSpringRef()
  const third = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, ref: thirdRef })
  // First run the spring, when it concludes run the transition
  useChain([firstRef, secondRef, thirdRef], [0, 1, 2])

  return (
    <PageLayout>
      <div>
        <animated.div style={first}>
          <h5 className={layoutStyles.homeintro}><br/>Hi, my name is</h5>
        </animated.div>
        <animated.div style={second}>
          <h1 className={layoutStyles.homename}>Philippe Chapdelaine.</h1>
        </animated.div>
        <animated.div style={third}>
          <h2 className={layoutStyles.home}>I build things.</h2>
          <button className={layoutStyles.homebtn}>
            <a className={layoutStyles.btnLink} rel="noreferrer" href="https://www.linkedin.com/in/philippe-chapdelaine-b63561185/" target="_blank">Get in touch.</a>
          </button>
        </animated.div>
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
