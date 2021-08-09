import React from 'react'
import { Link } from 'gatsby'
import PageLayout from '../components/pagelayout'
import * as layoutStyles from '../components/layout.module.scss'
import me from '../images/me-circle.png'

const AboutPage = () => {
  return (
    <PageLayout>
      <h1>About Me</h1>
      <div><br/><br/></div>
      <img className={layoutStyles.aboutimage} src={me} alt="me" />
      <p>Hi, I'm Phil, a fourth-year Cognitive Systems student at UBC. As a competitive person, I enjoy pushing myself in everything I do, and I love the challenges of solving programming problems.</p>
      <p>In my free time, I enjoy working out, playing video games, and playing soccer.</p>
      <p>I am currently searching for a developer position in 2021!</p>
    </PageLayout>
  )
}


export default AboutPage
