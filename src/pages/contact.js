import React from 'react'
import PageLayout from '../components/pagelayout'
import * as layoutStyles from '../components/layout.module.scss'

const ContactPage = () => {
  return (
    <PageLayout>
      <h1 className={layoutStyles.headers}>Contact Me</h1>
      <p>The best way to reach me is via <a href="https://www.twitter.com/" target="_blank">@Phil </a>on twitter</p>
    </PageLayout>
  )
}

export default ContactPage
