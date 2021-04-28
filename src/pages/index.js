import React from "react"

import { default  as styles } from "./index.module.css"
import { default  as buttonStyles } from "../styling/button.module.css";

class IndexComponent extends React.Component {
  render() {
    return (
      <div className={styles.index}>
        <h1>Hello world</h1>
        <button className={buttonStyles.button}>click this button</button>
      </div>
    )
  }
}

export default IndexComponent
