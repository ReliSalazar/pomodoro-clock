import React from "react";
import "./font-awesome-4.7.0/css/font-awesome.min.css";
import "./App.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mm: 50,
      ss: 0,
      timerLabel: "session",
      breakLenght: 10,
      sessionLenght: 50,
      startStop: "start",
      running: false,
      pause: false,
    };
    this.handleBreakIncrement = this.handleBreakIncrement.bind(this);
    this.handleBreakDecrement = this.handleBreakDecrement.bind(this);
    this.handleSessionIncrement = this.handleSessionIncrement.bind(this);
    this.handleSessionDecrement = this.handleSessionDecrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleStartStop = this.handleStartStop.bind(this);
    this.handleTimePreset = this.handleTimePreset.bind(this);
    this.audio = React.createRef();
  }

  handleBreakIncrement() {
    if (!this.state.running) {
      let val = this.state.breakLenght;
      if (val !== 60) {
        this.setState({
          breakLenght: (val += 1),
        });
      }
    }
  }

  handleBreakDecrement() {
    if (!this.state.running) {
      let val = this.state.breakLenght;
      if (val !== 1) {
        this.setState({
          breakLenght: (val -= 1),
        });
      }
    }
  }

  handleSessionIncrement() {
    if (!this.state.running) {
      let val = this.state.sessionLenght;
      if (val !== 60) {
        this.setState({
          sessionLenght: (val += 1),
          mm: val,
        });
      }
    }
  }

  handleSessionDecrement() {
    if (!this.state.running) {
      let val = this.state.sessionLenght;
      if (val !== 1) {
        this.setState({
          sessionLenght: (val -= 1),
          mm: val,
        });
      }
    }
  }

  handleReset() {
    this.setState({
      mm: 50,
      ss: 0,
      timerLabel: "session",
      breakLenght: 10,
      sessionLenght: 50,
      startStop: "start",
      running: false,
    });
    this.audio.current.pause();
    this.audio.current.currentTime = 0;
  }

  handleStartStop() {
    let { running } = this.state;
    running = !running;
    this.setState({
      startStop: running ? "stop" : "start",
      running: running,
    });
    // the first time set all as default, that helps to switch inside of the interval
    if (!this.state.running) {
      this.setState({
        pause: true,
      });
    }
    if (!this.state.pause) {
      this.setState({
        timerLabel: "session",
        mm: this.state.sessionLenght,
        ss: 0,
      });
    }

    const timer = () => {
      let { mm, ss } = this.state;
      if (this.state.running) {
        if (!(this.state.ss === 0)) {
          this.setState({
            ss: ss - 1,
          });
        } else if (!(this.state.mm === 0)) {
          this.setState({
            mm: mm - 1,
            ss: 59,
          });
        } else {
          this.audio.current.play();
          this.setState({
            timerLabel:
              this.state.timerLabel === "session" ? "break" : "session",
            mm:
              this.state.timerLabel === "session"
                ? this.state.breakLenght
                : this.state.sessionLenght,
            ss: 0,
          });
        }
      } else {
        clearInterval(interval);
      }
    };

    const interval = setInterval(timer, 1000);
  }

  handleTimePreset(newBreakLenght, newSessionLenght) {
    if (!this.state.running) {
      this.setState({
        mm: newSessionLenght,
        ss: 0,
        timerLabel: "session",
        breakLenght: newBreakLenght,
        sessionLenght: newSessionLenght,
        startStop: "start",
        running: false,
      });
      this.audio.current.pause();
      this.audio.current.currentTime = 0;
    }
  }

  render() {
    const {
      mm,
      ss,
      timerLabel,
      breakLenght,
      sessionLenght,
      startStop,
    } = this.state;

    return (
      <div className="clock">
        <div className="time-left">
          <div id="timer-label">{timerLabel}</div>
          <div id="time-left">
            {mm >= 10 ? mm : "0" + mm}:{ss >= 10 ? ss : "0" + ss}
          </div>
        </div>

        <div className="length-box">
          <div className="break-box">
            <div id="break-label">Break Length</div>
            <div id="break-length">{breakLenght}</div>
            <div className="buttons">
              <button
                className="add"
                id="break-increment"
                onClick={this.handleBreakIncrement}
              >
                <i className="fa fa-arrow-up" />
              </button>
              <button
                className="subtract"
                id="break-decrement"
                onClick={this.handleBreakDecrement}
              >
                <i className="fa fa-arrow-down" />
              </button>
            </div>
          </div>

          <div className="session-box">
            <div id="session-label">Session Length</div>
            <div id="session-length">{sessionLenght}</div>
            <div className="buttons">
              <button
                className="add"
                id="session-increment"
                onClick={this.handleSessionIncrement}
              >
                <i className="fa fa-arrow-up" />
              </button>
              <button
                className="subtract"
                id="session-decrement"
                onClick={this.handleSessionDecrement}
              >
                <i className="fa fa-arrow-down" />
              </button>
            </div>
          </div>
        </div>

        <div className="buttons-box">
          <button
            className="play_stop"
            id="start_stop"
            onClick={this.handleStartStop}
          >
            {startStop}
          </button>
          <button className="reset" id="reset" onClick={this.handleReset}>
            reset
          </button>
        </div>

        <div className="buttons-box">
          <button
            className="time_preset"
            onClick={() => this.handleTimePreset(1, 1)}
          >
            1:1
          </button>

          <button
            className="time_preset"
            onClick={() => this.handleTimePreset(5, 25)}
          >
            5:25
          </button>

          <button
            className="time_preset"
            onClick={() => this.handleTimePreset(10, 60)}
          >
            10:60
          </button>
        </div>
        <audio
          id="beep"
          ref={this.audio}
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock />
    </div>
  );
}

export default App;
