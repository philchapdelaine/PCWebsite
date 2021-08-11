import React from 'react'
import { Link } from 'gatsby'
import Head from '../components/head'

import SiteLayout from '../components/sitelayout'
import * as layoutStyles from '../components/layout.module.scss'

const NotFound = () => {
  return (
    <SiteLayout>
      <Head />
      <h1><br/></h1>
      <h1 className={layoutStyles.fourOhFour}>Page not found</h1>
      <p className={layoutStyles.fourOhFour}><Link to="/">Head home</Link></p>
    </SiteLayout>
  )
}

export default NotFound
