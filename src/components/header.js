import React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links';

// import "./header.module.scss"
import * as headerStyles from './header.module.scss'

import logo from '../images/favicon.ico'
import resume from '../images/philippe_chapdelaine_coop_resume_2021.pdf'

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
      <AnchorLink className={headerStyles.logo_box} to='/#home'>
        <img src={logo} alt='logo'/>
      </AnchorLink>
        <ul className={headerStyles.navList}>
          {/*
            <li>
            <AnchorLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/#home">Home</AnchorLink>
          </li>
          */}
          <li>
            <AnchorLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/#about">about</AnchorLink>
          </li>
          <li>
            <AnchorLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/#project">projects</AnchorLink>
          </li>
          <li>
            <AnchorLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/#project">experience</AnchorLink>
          </li>
          <li>
            <AnchorLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/#contact">contact</AnchorLink>
          </li>
          <li>
            <a className={headerStyles.resume} activeClassName={headerStyles.activeNavItem} href={resume} target="_blank" rel="noopener noreferrer">resume</a>
          </li>
        </ul>
    </header>
  )
}

export default Header
