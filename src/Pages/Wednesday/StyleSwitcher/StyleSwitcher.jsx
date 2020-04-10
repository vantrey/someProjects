import React from "react"
import styles from "./StyleSwitcher.module.css"


class StyleSwitcher extends React.Component {

  onStyleChange = (e) => {
    this.props.setStyle(e.target.id)
  }
  render = () => {
    return (
      <div className={styles.switcher}>
        <input
          name={`style`}
          type={`radio`}
          id={this.props.value}
          checked={this.props.checked}
          onChange={this.onStyleChange}/>
        <span id={this.props.value} onClick={this.onStyleChange}>{this.props.title} theme </span>
      </div>
    )
  }
}

export default StyleSwitcher