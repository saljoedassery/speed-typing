import React from "react";
import speedIcon from "../images/speed.svg";
import accuracyIcon from "../images/target.svg";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 10 };
    this.intervalHandle = null;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.reset !== this.props.reset) {
      this.init();
    }
    if (prevProps.timerRunning !== this.props.timerRunning) {
      if (this.props.timerRunning) this.startCountDown();
      else this.stopCountDown();
    }
  }

  init = () => {
    this.setState({ time: 60 });
    this.stopCountDown()
  };

  tick = () => {
    //function to change the time
    var time = this.state.time - 1;
    if (time <= 0) {
      console.log("Time up");
      this.stopCountDown()
      this.timeUp()
    }
    if (time < 10) {
      time = "0" + time;
    }
    this.setState({ time: time });
  };

  startCountDown = () => {
    this.intervalHandle = setInterval(this.tick, 1000);
  };

  stopCountDown = () => {
    clearInterval(this.intervalHandle);
  };

  timeUp = () => {
    // call the parent method calculate the final result
    console.log("Game finished")
    this.props.timeUp()
  }

  render() {
    return (
      <div className="details">
        <div className="details-content">
          <div className="time-section">
            <p>0:{this.state.time}s</p>
          </div>

          <div className="speed-section">
            <span className="speed-heading-section">
              <img src={speedIcon} alt="speed icon" />
              <p className="speed-heading">SPEED</p>
            </span>

            <p className="speed-value">
              0<span>WPM</span>
            </p>
          </div>

          <div className="speed-section">
            <span className="speed-heading-section">
              <img src={accuracyIcon} alt="accuracy icon" />
              <p className="speed-heading">ACCURACY</p>
            </span>

            <p className="speed-value">
              100<span>%</span>
            </p>
          </div>

          <div className="word-count-section">
            <p className="total-word-count">
              Total words: <span>{this.props.totalWords}</span>
            </p>
            <p className="correct-word-count">
              Correct words: <span>{this.props.correctWords}</span>
            </p>
            <p className="incorrect-word-count">
              Incorrect words: <span>{this.props.incorrectWords}</span>
            </p>
          </div>
          <button
            className="reset-button"
            onClick={() => {
              console.log("Reset button clicked");
              this.props.resetGame();
            }}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Details;
