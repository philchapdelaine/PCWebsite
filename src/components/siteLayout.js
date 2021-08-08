import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import "../styles/index.scss"
import * as headerStyles from './header.module.scss'
import * as footerStyles from './footer.module.scss'
import * as layoutStyles from  "./layout.module.scss"

import { StickyContainer, Sticky } from 'react-sticky';

const SiteLayout = (props) => {

  return (
    <div className={layoutStyles.bg}>
      <StickyContainer>
        <Sticky>{({ style }) => <header className={headerStyles.header} style={style}><Header /></header>}</Sticky>
        {props.children}
        <Footer className={footerStyles.footer}/>
      </StickyContainer>
    </div>
  )
}

export default SiteLayout
