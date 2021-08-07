import React from 'react'
import { Link } from 'gatsby'
import Head from '../components/head'

import SiteLayout from '../components/sitelayout'

const NotFound = () => {
  return (
    <SiteLayout>
      <Head />
      <h1><br/></h1>
      <h1>Page not found</h1>
      <p><Link to="/">Head home</Link></p>
    </SiteLayout>
  )
}

export default NotFound
