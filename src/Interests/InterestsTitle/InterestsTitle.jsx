import React from "react";
import styles from './InterestsTitle.module.css'

class InterestsTitle extends React.Component {

  render = () => {
    return (
      <h3 className={styles.interestsTitle}>{this.props.interestsTitle}</h3>
    )
  }
}

export default InterestsTitle;
