import React from 'react'
import PageLayout from '../components/pagelayout'
import * as layoutStyles from '../components/layout.module.scss'
import { Link } from 'gatsby'

const ContactPage = () => {
  return (
    <PageLayout>
      <h1 className={layoutStyles.contactHeader}>Contact Me</h1>
      <div className={layoutStyles.contactBodyText}>
        <p>I'm always happy to chat so my inbox is always open. Whether you have a question or just want to say hi, I'll get back to you!</p>
        <button className={layoutStyles.btn}>
          <a className={layoutStyles.btnLink} href="https://www.linkedin.com/in/philippe-chapdelaine-b63561185/" target="_blank">Say Hello</a>
        </button>
      </div>
    </PageLayout>
  )
}

export default ContactPage
