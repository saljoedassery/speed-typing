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
      inputDisabled: false,
      wpm: 0,
      accuracy: 100,
    };
    this.timeInSec = 60;
    this.texts = [
      "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
      "A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.",
      "Another writing challenge can be to take the individual sentences in the paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the paragraph will have some connection to one another so it will be different. You also won't know exactly how many sentences will appear in the paragraph.",
      "It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are needed, this tool can be a great way to get that. It's a good way to test your programming and that the tool being created is working well. Above are a few examples of how the random paragraph generator can be beneficial.",
      "If you do find this paragraph tool useful, please do us a favor and let us know how you're using it. It's greatly beneficial for us to know the different ways this tool is being used so we can improve it with updates. This is especially true since there are times when the generators we create get used in completely unanticipated ways from when we initially created them.",
      "In this exercise, the idea is to write a paragraph that would be a random passage from a story. An effective paragraph is one that has unity (it isn’t a hodgepodge of things), focus (everything in the paragraph stacks up to the whatever-it-is the paragraph is about), and coherence (the content follows smoothly). For this exercise, the paragraph should be quick to read.",
      "She made an attempt to straighten her tawny hair. Her voice quavered with emotion. “You must be a very lonely man, Judge Seagrave.” Then she turned a gaze on him that might have ignited a rain-sodden haystack. And I’m a lonely woman. It might be merely descriptive: Lines of weeds criss-crossed the cracked parking lot of the Seashell Motor Courts.", 
      "The flaking paint on the buildings had chalked to a pastel pink on walls covered with graffiti. Many of the windows had been smashed out. Where the sign had been, atop rusting steel posts, only the metal outline of a seashell remained. It might have action but no dialogue. Above ground was the medieval settlement of Skaar’s Outpost, a fort to guard the cave entrance.", 
      "Terry didn't consider himself particularly unusual. Sure, he spent his teenage years as a willing and sometimes absurdly cheerful social outcast, upon adulthood immediately transitioned to playing side-kick to a magic-savvy private investigator, accidentally became the confidant of an apparently ageless time-traveler, and just recently declared war on a corporation." ,
      "Silence should be safe. Silence should tell him, even in the dark, that nothing approached him, that nothing nearby could hurt him. Nonetheless, he began to long for noise, especially for the noise of straight-forward confrontation. To fight an enemy directly would be a blessing compared to stumbling blind, searching for the voiceless, already destroyed him twice."
    ];

    this.text = this.texts[Math.floor(Math.random() * 10)];
  }

  setStarted = () => {
    this.setState({ timerRunning: !this.state.timerRunning });
  };

  resetGame = () => {
    console.log("reset game called");
    this.text = this.texts[Math.floor(Math.random() * 10)];
    this.timeInSec = 60;
    this.setState({
      reset: !this.state.reset,
      correctWords: 0,
      incorrectWords: 0,
      timerRunning: false,
      wpm: 0,
      accuracy: 100,
    });
  };

  setCorrectAndIncorrectWords = (correct, incorrect) => {
    this.setState({ correctWords: correct, incorrectWords: incorrect });
  };

  timeUp = () => {
    this.setState({ inputDisabled: true });
  };

  finishGame = (timeInSec) => {
    console.log("Time took to finish: ", timeInSec);
    this.timeInSec = timeInSec;
  };

  findResult = (totalLettersTyped, incorrectLetters) => {
    console.log(
      "Total letters typed: " +
        totalLettersTyped +
        " incorrect letters: " +
        incorrectLetters +
        "timeInSec: " +
        this.timeInSec
    );
    var timeInMin = this.timeInSec / 60;
    var grossWPM = totalLettersTyped / 5 / timeInMin;
    var netWPM = grossWPM - incorrectLetters / timeInMin;
    netWPM = netWPM.toFixed(2);
    var accuracy =
      ((totalLettersTyped - incorrectLetters) * 100) / totalLettersTyped;
    accuracy = accuracy.toFixed(1);
    console.log("WPM: " + netWPM + " accuracy: " + accuracy);
    this.setState({ wpm: netWPM, accuracy: accuracy });
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
          inputDisabled={this.state.inputDisabled}
          findResult={(totalLettersTyped, incorrectLetters) =>
            this.findResult(totalLettersTyped, incorrectLetters)
          }
        />
        <Details
          timerRunning={this.state.timerRunning}
          totalWords={this.text.split(" ").length}
          correctWords={this.state.correctWords}
          incorrectWords={this.state.incorrectWords}
          resetGame={this.resetGame}
          reset={this.state.reset}
          timeUp={this.timeUp}
          finishGame={(timeInSec) => this.finishGame(timeInSec)}
          wpm={this.state.wpm}
          accuracy={this.state.accuracy}
        />
      </div>
    );
  }
}

export default MainComponent;
