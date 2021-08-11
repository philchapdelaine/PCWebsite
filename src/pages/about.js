import React from 'react'
import { Link } from 'gatsby'
import PageLayout from '../components/pagelayout'
import * as layoutStyles from '../components/layout.module.scss'
import me from '../images/me-circle.png'
import { Parallax  } from 'react-scroll-parallax';
import Moon from '../images/moon.svg'
import Shuttle from '../images/shuttle.svg'

const AboutPage = () => {
  return (
    <PageLayout>
      <Parallax y={[ 200, -440 ]} >
        <Moon />
      </Parallax>
      <Parallax  y={[ 350, -140 ]} >
      <h1 className={layoutStyles.headers}>About Me</h1>
      <div><br/><br/></div>
      <img className={layoutStyles.aboutimage} src={me} alt="me" />
      <div className={layoutStyles.bodyText}>
        <p>Hi, I'm Phil, a fourth-year Cognitive Systems student at UBC. As a competitive person, I enjoy pushing myself in everything I do, and I love the challenges of solving programming problems.</p>
        <p>In my free time, I enjoy working out, playing video games, and playing soccer.</p>
        <p>I am currently searching for a developer position in 2021!</p>
      </div>
      </Parallax>
    </PageLayout>
  )
}


export default AboutPage
