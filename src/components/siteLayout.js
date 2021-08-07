import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import "../styles/index.scss"
import * as layoutStyles from  "./layout.module.scss"

import { StickyContainer, Sticky } from 'react-sticky';

const SiteLayout = (props) => {
  return (
    <div className={layoutStyles.container}>
    <StickyContainer>
      <Sticky>{({ style }) => <header id="header" style={style}><Header /></header>}</Sticky>
        <div className={layoutStyles.content}>
          {props.children}
        </div>
      <Footer />
    </StickyContainer>
    </div>
  )
}

export default SiteLayout
