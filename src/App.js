import React from 'react'
import './font-awesome-4.7.0/css/font-awesome.min.css'
import './App.css'

class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mm: 25,
      ss: 0,
      timerLabel: 'session',
      breakLenght: 5,
      sessionLenght: 25,
      startStop: 'start',
      running: false
    }
    this.handleBreakIncrement = this.handleBreakIncrement.bind(this)
    this.handleBreakDecrement = this.handleBreakDecrement.bind(this)
    this.handleSessionIncrement = this.handleSessionIncrement.bind(this)
    this.handleSessionDecrement = this.handleSessionDecrement.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleStartStop = this.handleStartStop.bind(this)
  }

  handleBreakIncrement () {
    let val = this.state.breakLenght
    if (val !== 60) {
      this.setState({
        breakLenght: (val += 1)
      })
    }
  }

  handleBreakDecrement () {
    let val = this.state.breakLenght
    if (val !== 1) {
      this.setState({
        breakLenght: (val -= 1)
      })
    }
  }

  handleSessionIncrement () {
    let val = this.state.sessionLenght
    if (val !== 60) {
      this.setState({
        sessionLenght: (val += 1)
      })
    }
  }

  handleSessionDecrement () {
    let val = this.state.sessionLenght
    if (val !== 1) {
      this.setState({
        sessionLenght: (val -= 1)
      })
    }
  }

  handleReset () {
    this.setState({
      mm: 25,
      ss: 0,
      timerLabel: 'session',
      breakLenght: 5,
      sessionLenght: 25,
      startStop: 'start',
      running: false
    })
  }

  handleStartStop () {
    let { running } = this.state
    running = !running
    this.setState({
      mm: this.state.sessionLenght,
      startStop: running ? 'stop' : 'start',
      running: running
    })

    /*
    * bucle externo que corra desde el arranque
    * el bucle debe evaluar si está corriendo o no (running)
      * si no corre, no pasa nada
      * si corre, evalúa si los segundos son 0
        * si los segundos no son cero, los reduce en 1
        * si los segundos son cero, evalúa si los minutos son cero
          * si los minutos no son cero, los reduce en 1 y pone los segundos en 59
          * si los minutos son cero cambia a break o session dependiendo en cual esté
            * recetea tanto los minutos como los segundos y empieza de nuevo
    */

    const timer = () => {
      clearInterval(interval)
    }

    const interval = setInterval(timer, 1000)
  }

  render () {
    const {
      mm,
      ss,
      timerLabel,
      breakLenght,
      sessionLenght,
      startStop
    } = this.state
    const audioSRC =
      'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
    console.log(audioSRC)

    return (
      <div className='clock'>
        <div className='time-left'>
          <div id='timer-label'>{timerLabel}</div>
          <div id='time-left'>
            {mm}:{ss >= 10 ? ss : '0' + ss}
          </div>
        </div>

        <div className='length-box'>
          <div className='break-box'>
            <div id='break-label'>Break Length</div>
            <div id='break-length'>{breakLenght}</div>
            <div className='buttons'>
              <button
                className='add'
                id='break-increment'
                onClick={this.handleBreakIncrement}
              >
                <i className='fa fa-arrow-up' />
              </button>
              <button
                className='subtract'
                id='break-decrement'
                onClick={this.handleBreakDecrement}
              >
                <i className='fa fa-arrow-down' />
              </button>
            </div>
          </div>

          <div className='session-box'>
            <div id='session-label'>Session Length</div>
            <div id='session-length'>{sessionLenght}</div>
            <div className='buttons'>
              <button
                className='add'
                id='session-increment'
                onClick={this.handleSessionIncrement}
              >
                <i className='fa fa-arrow-up' />
              </button>
              <button
                className='subtract'
                id='session-decrement'
                onClick={this.handleSessionDecrement}
              >
                <i className='fa fa-arrow-down' />
              </button>
            </div>
          </div>
        </div>

        <div className='buttons-box'>
          <button
            className='play_stop'
            id='start_stop'
            onClick={this.handleStartStop}
          >
            {startStop}
          </button>
          <button className='reset' id='reset' onClick={this.handleReset}>
            reset
          </button>
        </div>
      </div>
    )
  }
}

function App () {
  return (
    <div>
      <Clock />
    </div>
  )
}

export default App
