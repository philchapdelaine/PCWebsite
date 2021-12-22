import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links';

// import "./header.module.scss"
import * as headerStyles from './header.module.scss'

import icon from '../images/gatsby-icon.png'
import resume from '../images/philippe_chapdelaine_resume_2021.pdf'

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
        <img src={icon} alt='logo'/>
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
            <AnchorLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/#experience">experience</AnchorLink>
          </li>
          <li>
            <AnchorLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/#contact">contact</AnchorLink>
          </li>
          <button className={headerStyles.resumebtn}>
            <a className={headerStyles.btnLink} href={resume} target="_blank" rel="noopener noreferrer">resume</a>
          </button>
        </ul>
    </header>
  )
}

export default Header
