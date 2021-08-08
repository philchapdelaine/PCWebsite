import React from "react"
import "../styles/index.scss"
import * as layoutStyles from  "./layout.module.scss"

const PageLayout = (props) => {
  return (
    <div>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default PageLayout
