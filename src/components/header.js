import React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";

// import "./header.module.scss"
import * as headerStyles from './header.module.scss'

import logo from '../images/@me.jpg'
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
      <Link className={headerStyles.logo_box} to='/'>
        <img src={logo} alt='logo'/>
      </Link>
        <ul className={headerStyles.navList}>
          {/*
            <li>
            <AnchorLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/#home">Home</AnchorLink>
          </li>
          */}
          <li>
            <AnchorLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/#about">ABOUT</AnchorLink>
          </li>
          <li>
            <AnchorLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/#project">PROJECTS</AnchorLink>
          </li>
          <li>
            <AnchorLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/#contact">CONTACT</AnchorLink>
          </li>
          <li>
            <AnchorLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/#blog">BLOG</AnchorLink>
          </li>
          <li>
            <a className={headerStyles.resume} activeClassName={headerStyles.activeNavItem} href={resume} target="_blank" rel="noopener noreferrer">RESUME</a>
          </li>
        </ul>
    </header>
  )
}

export default Header
