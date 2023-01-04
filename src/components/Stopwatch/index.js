// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0}

  startClock = () => {
    const {seconds} = this.state
    if (seconds !== 59) {
      this.timeId = setInterval(this.tick, 1000)
    } else {
      this.setState({seconds: 0})
      this.setState(prevState => ({
        minutes: prevState.minutes + 1,
      }))
    }
  }

  tick = () => {
    const {seconds} = this.state

    if (seconds !== 59) {
      this.setState(prevState => ({seconds: prevState.seconds + 1}))
    } else {
      this.setState({seconds: 0})
      this.setState(prevState => ({
        minutes: prevState.minutes + 1,
      }))
    }
  }

  stopClock = () => {
    clearInterval(this.timeId)
  }

  resetClock = () => {
    clearInterval(this.timeId)
    this.setState({minutes: 0, seconds: 0})
  }

  render() {
    const {minutes, seconds} = this.state
    let displayMinutes = minutes
    let displaySeconds = seconds

    if (minutes < 10) {
      displayMinutes = minutes.toString()
      displayMinutes = `0${displayMinutes}`
    }
    if (seconds < 10) {
      displaySeconds = seconds.toString()
      displaySeconds = `0${displaySeconds}`
    }
    console.log(displayMinutes, displaySeconds)

    return (
      <div className="main-container">
        <div className="stop-time-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-img-box">
            <div className="timer-time-img-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="stopwatch-img"
              />
              <p className="timer">Timer</p>
            </div>
            <h1 className="current-time">
              {displayMinutes}:{displaySeconds}
            </h1>
            <div className="start-stop-reset">
              <button type="button" className="start" onClick={this.startClock}>
                Start
              </button>
              <button type="button" className="stop" onClick={this.stopClock}>
                Stop
              </button>
              <button type="button" className="reset" onClick={this.resetClock}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
