import React from "react"
import {connect} from "react-redux"
import styles from "./Wednesday.module.css"
import StyleSwitcher from "./StyleSwitcher/StyleSwitcher"
import {getServerStatus, setCheckbox, setStyle} from "../../redux/wednesdayReducer"
import Preloader from "../../Loading/Preloader"
import MultiColoredText from "../../MultiColoredText/MultiColoredText.jsx"

class Wednesday extends React.Component {

  setStyle = (value) => {
    this.props.setStyle(value)
  }

  onRequestClick = () => {
  this.props.getServerStatus(this.props.isChecked)
  }

  onCheckboxChanged = (e) => {
    this.props.setCheckbox(e.target.checked)
  }

  render = () => {
    return (
      <div className={`${styles.wrapper} ${this.props.style.style}`}>
        <div className={styles.content}>
          {this.props.stylesSwitchers.map((s, i) =>
            <StyleSwitcher
              key={i}
              value={s.value}
              checked={s.checked}
              title={s.title}
              setStyle={this.setStyle}/>
          )}
          <div className={styles.sendBox}>
            <input onChange={this.onCheckboxChanged} type={`checkbox`} checked={this.props.isChecked}/>
            <button onClick={this.onRequestClick} disabled={this.props.isLoading}>
              send
            </button>
          </div>
          <div className={styles.serverStatus}>
            {this.props.isLoading
              ? <Preloader/>
              : <MultiColoredText text={this.props.serverStatus}/>}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    style: state.wednesday.style,
    stylesSwitchers: state.wednesday.stylesSwitchers,
    isChecked: state.wednesday.isChecked,
    serverStatus: state.wednesday.serverStatus,
    isLoading: state.loading.isLoading
  }
}

export default connect(mapStateToProps, {setCheckbox, setStyle, getServerStatus})(Wednesday)