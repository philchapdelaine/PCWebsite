import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { navigate } from '@reach/router';

// import "./header.module.scss"
import * as headerStyles from './header.module.scss'

import logo from '../images/@me.jpg'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  {/* <h1>
    <Link className={headerStyles.title} to="/">
      {data.site.siteMetadata.title}
    </Link>
  </h1> */}

  return (
    <header className={headerStyles.header}>
      <Link className={headerStyles.logo_box} to='/'>
        <img src={logo} alt='logo'/>
      </Link>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/home">Home</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
          </li>
        </ul>
    </header>
  )
}

export default Header
