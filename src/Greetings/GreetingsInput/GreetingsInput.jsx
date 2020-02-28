import React from 'react';
import styles from './GreetingsInput.module.css'

class GreetingsInput extends React.Component {
  onEnterKeyDown = (e) => {
    if (this.props.inputRef.current.value.trim() && e.keyCode === 13) {  // keyCode of "enter" = 13
      this.props.addGreetingsOutput()
    }
  };
  onInputText = () => {
    this.props.swishButtonDisable()
  };
  render = () => {
    return (
      <input className={styles.greetingsInput}
             type='text'
             placeholder='введи свое имя'
             ref={this.props.inputRef}
             onInput={this.onInputText}
             onKeyDown={this.onEnterKeyDown}
      />
    )
  }
}

export default GreetingsInput
