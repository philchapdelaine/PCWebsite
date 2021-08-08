import React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";

// import "./header.module.scss"
import * as headerStyles from './header.module.scss'

import logo from '../images/@me.jpg'

const Header = () => {

  {/*
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  */}

  {/*
    <h1>
    <Link className={headerStyles.title} to="/">
      {data.site.siteMetadata.title}
    </Link>
  </h1>
  */}

  return (
    <header className={headerStyles.header}>
      <Link className={headerStyles.logo_box} to='/'>
        <img src={logo} alt='logo'/>
      </Link>
        <ul className={headerStyles.navList}>
          <li>
            <AnchorLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/#home">Home</AnchorLink>
          </li>
          <li>
            <AnchorLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/#about">About</AnchorLink>
          </li>
          <li>
            <AnchorLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/#contact">Contact</AnchorLink>
          </li>
          <li>
            <AnchorLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/#blog">Blog</AnchorLink>
          </li>
          <li>
            <AnchorLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/#project">Projects</AnchorLink>
          </li>
        </ul>
    </header>
  )
}

export default Header
