import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import "../styles/index.scss"
import * as headerStyles from './header.module.scss'

import { StickyContainer, Sticky } from 'react-sticky';

const SiteLayout = (props) => {

  return (
    <div> //add styling here
    <StickyContainer>
      <Sticky>{({ style }) => <header className={headerStyles.header} style={style}><Header /></header>}</Sticky>
      {props.children}
      <Footer />
    </StickyContainer>
    </div>
  )
}

export default SiteLayout
