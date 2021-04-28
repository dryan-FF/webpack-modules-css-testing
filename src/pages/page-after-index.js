import React from "react"

import { default as styles } from "./page-after-index.module.css"
const { index, linkButton } = styles;

class IndexComponent extends React.Component {
  render() {
    return (
      <div className={index}>
        <h1>Hello world</h1>
        <a href="#" className={linkButton}>click this link</a>
      </div>
    )
  }
}

export default IndexComponent