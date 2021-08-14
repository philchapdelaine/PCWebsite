import React from 'react'
import PageLayout from '../components/pagelayout'
import * as layoutStyles from '../components/layout.module.scss'
import { Link } from 'gatsby'
import Moon from '../images/moon.svg'
import { Parallax  } from 'react-scroll-parallax';


const ContactPage = () => {
  return (
    <PageLayout>
      <Parallax y={[ 150, -440 ]}>
        <Moon />
      </Parallax>
      <div data-sal="slide-up">
      <h1 className={layoutStyles.contactHeader}>Contact Me</h1>
      <div className={layoutStyles.contactBodyText}>
        <p>I'm always happy to chat so my inbox is always open. Whether you have a question or just want to say hi, I'll get back to you!</p>
        <button className={layoutStyles.contactBtn}>
          <a className={layoutStyles.btnLink} href="https://www.linkedin.com/in/philippe-chapdelaine-b63561185/" target="_blank">Say Hello</a>
        </button>
      </div>
      </div>
    </PageLayout>
  )
}

export default ContactPage
