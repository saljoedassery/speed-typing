import React from "react";

class Typing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordsList: [],
      status: [],
      currentActiveWord: 0,
      inputValue: "",
      letters: [],
      letterStatus: [],
      currentActiveLetter: 0,
      inputDisabled: false,
    };
    this.correctWords = 0;
    this.timerRunning = false;
  }

  componentDidMount() {
    this.init();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.reset !== this.props.reset) this.init();
  }

  init = () => {
    this.timerRunning = false;
    var wordsList = this.props.text.split(" ");
    var status = [];
    for (var i = 0; i < wordsList.length; i++) {
      status[i] = "inactive";
    }
    status[0] = "active";
    var letterStatus = [];

    var tempWordList = this.props.text.split("");
    tempWordList.push(" ");
    for (var j = 0; j < tempWordList.length; j++) {
      letterStatus[j] = "letter-inactive";
    }
    letterStatus[0] = "letter-active";

    this.setState({
      wordsList: wordsList,
      status: status,
      letterStatus: letterStatus,
      letters: tempWordList,
      inputDisabled: false,
      inputValue: "",
      currentActiveLetter: 0,
      currentActiveWord: 0,
    });
  };

  findResult = () => {
    this.setWordCount(this.correctWords);
    this.setState({inputDisabled: true})
    //stop the time
    this.setStarted()
    //find the speed and accuracy
  };

  setWordCount = (correct) => {
    this.props.setWordCount(correct, this.state.wordsList.length - correct);
  };

  setStarted = () => {
    this.props.setStarted();
  };

  onChange = (event) => {
    this.setState({ inputValue: event.target.value.trim() });
  };

  onKeyPress = (event) => {
    var letters = this.state.letters;
    var currentActiveLetter = this.state.currentActiveLetter;
    var letterStatus = this.state.letterStatus;
    var currentActiveWord = this.state.currentActiveWord;
    var status = this.state.status;
    var wordsList = this.state.wordsList;
    var inputValue = this.state.inputValue;

    if (event.key.length === 1) {
      if (!this.timerRunning) {
        this.timerRunning = true;
        this.setStarted();
      }

      if (event.key === letters[currentActiveLetter]) {
        letterStatus[currentActiveLetter] = "letter-valid";
      } else {
        letterStatus[currentActiveLetter] = "letter-invalid";
      }

      //if it is last letter of the word, make the current word inacive
      var currentWordLength =
        wordsList.length <= currentActiveWord
          ? 0
          : wordsList[currentActiveWord].length - 1;
      if (
        letters
          .slice(
            currentActiveLetter - currentWordLength,
            currentActiveLetter + 1
          )
          .join("") === wordsList[currentActiveWord]
      ) {
        // console.log("last letter or the word pressed");
        status[currentActiveWord] = "inactive";
        currentActiveWord += 1;
      }

      //   if the currently active letter is space highlight no word
      if (letters[currentActiveLetter] === " ") {
        status[currentActiveWord] = "active";
      }

      currentActiveLetter += 1;
      letterStatus[currentActiveLetter] = "letter-active";

      //if space pressed
      if (event.keyCode === 32 || event.keyCode === 0) {
        // check if the last word is correct
        if (wordsList[currentActiveWord - 1] === inputValue) {
          this.correctWords += 1;
        }
        if (wordsList.length <= currentActiveWord) {
          this.findResult();
        }

        inputValue = "";
      }

      this.setState({
        currentActiveLetter: currentActiveLetter,
        letterStatus: letterStatus,
        currentActiveWord: currentActiveWord,
        status: status,
        inputValue: inputValue
      });
    }
    //if backspace pressed
    else if (event.key === "Backspace") {
      // console.log("Backspace pressed");

      //if input field has some value on it
      if (inputValue.length > 0) {
        //moving a letter back
        letterStatus[currentActiveLetter] = "letter-inactive";

        //moved back from space
        if (letters[currentActiveLetter] === " ") {
          currentActiveWord -= 1;
          status[currentActiveWord] = "active";
        }

        currentActiveLetter -= 1;
        letterStatus[currentActiveLetter] = "letter-active";

        // moving a word back if current active letter is word's last letter
        if (letters[currentActiveLetter] === " ") {
          status[currentActiveWord] = "inactive";
        }
        // console.log("active word: " + wordsList[currentActiveWord]);
        this.setState({
          currentActiveLetter: currentActiveLetter,
          letterStatus: letterStatus,
          status: status,
          currentActiveWord: currentActiveWord,
        });
      }
    }
  };

  render() {
    var letterIndex = 0;
    return (
      <div className="typing">
        <div className="input-section">
          <div className="text-area">
            <p>
              {this.state.wordsList.map((word, index) => (
                <>
                  <span
                    className={"word " + this.state.status[index]}
                    key={"word" + index}
                  >
                    {word.split("").map((letter, ind) => (
                      <span
                        className={this.state.letterStatus[letterIndex++]}
                        key={"letter" + letterIndex}
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                  <span
                    className={
                      "space " + this.state.letterStatus[letterIndex++]
                    }
                    key={"space" + index}
                  ></span>
                </>
              ))}
            </p>
          </div>
          <input
            type="text"
            className="text-input"
            autoFocus={true}
            onKeyDown={this.onKeyPress}
            value={this.state.inputValue}
            onChange={this.onChange}
            disabled={this.state.inputDisabled}
          />
        </div>
      </div>
    );
  }
}

export default Typing;
