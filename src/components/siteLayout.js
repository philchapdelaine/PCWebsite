import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import "../styles/index.scss"
import * as headerStyles from './header.module.scss'
import * as footerStyles from './footer.module.scss'
import * as layoutStyles from  "./layout.module.scss"

import { StickyContainer, Sticky } from 'react-sticky'

import { useSpring, animated } from 'react-spring'
import { ParallaxProvider  } from 'react-scroll-parallax';

const SiteLayout = (props) => {

  return (
    <div className={layoutStyles.bg}>
      <StickyContainer>
        <Sticky>{({ style }) => <header className={headerStyles.header} style={style}><Header /></header>}</Sticky>
        <ParallaxProvider>
          {props.children}
        </ParallaxProvider>
      </StickyContainer>
      <Footer className={footerStyles.footer}/>
    </div>
  )
}

export default SiteLayout
