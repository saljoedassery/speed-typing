import React from "react";
import Typing from "./Typing";
import Details from "./Details";

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerRunning: false,
      correctWords: 0,
      incorrectWords: 0,
      reset: false,
    };
    // this.text = "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.";
    this.text =
      "Another productive way to use.";
  }

  setStarted = () => {
    console.log("Game started");
    this.setState({ timerRunning: !this.state.timerRunning });
  };

  resetGame = () => {
    console.log("reset game called");
    this.setState({
      reset: !this.state.reset,
      correctWords: 0,
      incorrectWords: 0
    });
  };

  setCorrectAndIncorrectWords = (correct, incorrect) => {
    this.setState({ correctWords: correct, incorrectWords: incorrect });
  };

  render() {
    return (
      <div className="main">
        <Typing
          setStarted={this.setStarted}
          text={this.text}
          setWordCount={(correct, incorrect) =>
            this.setCorrectAndIncorrectWords(correct, incorrect)
          }
          reset={this.state.reset}
        />
        <Details
          timerRunning={this.state.timerRunning}
          totalWords={this.text.split(" ").length}
          correctWords={this.state.correctWords}
          incorrectWords={this.state.incorrectWords}
          resetGame={this.resetGame}
          reset={this.state.reset}
        />
      </div>
    );
  }
}

export default MainComponent;
