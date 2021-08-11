import React from 'react'
import PageLayout from '../components/pagelayout'
import * as layoutStyles from '../components/layout.module.scss'
import { Link } from 'gatsby'

const ContactPage = () => {
  return (
    <PageLayout>
      <h1 className={layoutStyles.headers}>Contact Me</h1>
      <p>I'm always happy to chat so my inbox is always open. Whether you have a question or just want to say hi, I'll get back to you!</p>
      <button className={layoutStyles.btn}>
        <Link className={layoutStyles.btnLink} to="/404">Say Hello</Link>
      </button>
      <p>The best way to reach me is via <a href="https://www.twitter.com/" target="_blank">@Phil </a>on twitter</p>
    </PageLayout>
  )
}

export default ContactPage
