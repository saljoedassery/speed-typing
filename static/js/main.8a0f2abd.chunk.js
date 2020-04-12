(this["webpackJsonpspeed-typing"]=this["webpackJsonpspeed-typing"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/speed.1f766eca.svg"},function(e,t,a){e.exports=a.p+"static/media/target.a17d4568.svg"},function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),i=a.n(s),o=(a(14),a(15),a(1)),c=a(2),l=a(3),u=a(4),h=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).init=function(){n.timerRunning=!1,n.correctWords=0;for(var e=n.props.text.split(" "),t=[],a=0;a<e.length;a++)t[a]="inactive";t[0]="active";var r=[],s=n.props.text.split("");s.push(" ");for(var i=0;i<s.length;i++)r[i]="letter-inactive";r[0]="letter-active",n.setState({wordsList:e,status:t,letterStatus:r,letters:s,inputDisabled:!1,inputValue:"",currentActiveLetter:0,currentActiveWord:0})},n.findResult=function(){console.log("find result called"),n.setWordCount(n.correctWords),n.setState({inputDisabled:!0});var e=n.state.currentActiveLetter,t=(n.state.letterStatus.join("").match(/letter-valid/g)||[]).length;n.props.findResult(e,e-t)},n.setWordCount=function(e){n.props.setWordCount(e,n.state.currentActiveWord-e)},n.setStarted=function(){return n.props.setStarted(),new Promise((function(e,t){e("Success!")}))},n.onChange=function(e){n.setState({inputValue:e.target.value.trim()})},n.onKeyPress=function(e){var t=n.state.letters,a=n.state.currentActiveLetter,r=n.state.letterStatus,s=n.state.currentActiveWord,i=n.state.status,o=n.state.wordsList,c=n.state.inputValue;if(1===e.key.length){n.timerRunning||(n.timerRunning=!0,n.setStarted()),e.key===t[a]?r[a]="letter-valid":r[a]="letter-invalid";var l=o.length<=s?0:o[s].length-1;t.slice(a-l,a+1).join("")===o[s]&&(i[s]="inactive",s+=1)," "===t[a]&&(i[s]="active"),r[a+=1]="letter-active",32!==e.keyCode&&0!==e.keyCode||(o[s-1]===c&&(n.correctWords+=1),o.length<=s&&(r[a-=1]="letter-inactive",n.setStarted().then((function(){return n.findResult()}))),c=""),n.setState({currentActiveLetter:a,letterStatus:r,currentActiveWord:s,status:i,inputValue:c})}else"Backspace"===e.key&&c.length>0&&(r[a]="letter-inactive"," "===t[a]&&(i[s-=1]="active"),r[a-=1]="letter-active"," "===t[a]&&(i[s]="inactive"),n.setState({currentActiveLetter:a,letterStatus:r,status:i,currentActiveWord:s}))},n.state={wordsList:[],status:[],currentActiveWord:0,inputValue:"",letters:[],letterStatus:[],currentActiveLetter:0,inputDisabled:!1},n.correctWords=0,n.timerRunning=!1,n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.init()}},{key:"componentDidUpdate",value:function(e){e.reset!==this.props.reset&&this.init(),e.inputDisabled!==this.props.inputDisabled&&this.findResult()}},{key:"render",value:function(){var e=this,t=0;return r.a.createElement("div",{className:"typing"},r.a.createElement("div",{className:"input-section"},r.a.createElement("div",{className:"text-area"},r.a.createElement("p",null,this.state.wordsList.map((function(a,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"word "+e.state.status[n],key:"word"+n},a.split("").map((function(a,n){return r.a.createElement("span",{className:e.state.letterStatus[t++],key:"letter"+t},a)}))),r.a.createElement("span",{className:"space "+e.state.letterStatus[t++],key:"space"+n}))})))),r.a.createElement("input",{type:"text",className:"text-input",autoFocus:!0,onKeyDown:this.onKeyPress,value:this.state.inputValue,onChange:this.onChange,disabled:this.state.inputDisabled,placeholder:"Start typing..."})))}}]),a}(r.a.Component),d=a(7),p=a.n(d),m=a(8),g=a.n(m),f=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).init=function(){n.setState({time:60}),n.stopCountDown()},n.tick=function(){var e=n.state.time-1;e<=0&&(console.log("Time up"),n.stopCountDown(),n.timeUp(0)),e<10&&(e="0"+e),n.setState({time:e})},n.startCountDown=function(){console.log("Countdown started"),n.intervalHandle=setInterval(n.tick,1e3)},n.stopCountDown=function(){console.log("stopping countdown"),clearInterval(n.intervalHandle)},n.timeUp=function(){n.props.timeUp()},n.finishGame=function(e){n.props.finishGame(e)},n.state={time:60},n.intervalHandle=null,n}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e){e.reset!==this.props.reset?this.init():e.timerRunning!==this.props.timerRunning&&(this.props.timerRunning?this.startCountDown():(console.log("Game finished before time is up!!"),this.stopCountDown(),this.finishGame(10-this.state.time)))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"details-content"},r.a.createElement("div",{className:"time-section"},r.a.createElement("p",null,"0:",this.state.time,"s")),r.a.createElement("div",{className:"speed-section"},r.a.createElement("span",{className:"speed-heading-section"},r.a.createElement("img",{src:p.a,alt:"speed icon"}),r.a.createElement("p",{className:"speed-heading"},"SPEED")),r.a.createElement("p",{className:"speed-value"},this.props.wpm,r.a.createElement("span",null,"WPM"))),r.a.createElement("div",{className:"speed-section"},r.a.createElement("span",{className:"speed-heading-section"},r.a.createElement("img",{src:g.a,alt:"accuracy icon"}),r.a.createElement("p",{className:"speed-heading"},"ACCURACY")),r.a.createElement("p",{className:"speed-value"},this.props.accuracy,r.a.createElement("span",null,"%"))),r.a.createElement("div",{className:"word-count-section"},r.a.createElement("p",{className:"total-word-count"},"Total words: ",r.a.createElement("span",null,this.props.totalWords)),r.a.createElement("p",{className:"correct-word-count"},"Correct words: ",r.a.createElement("span",null,this.props.correctWords)),r.a.createElement("p",{className:"incorrect-word-count"},"Incorrect words: ",r.a.createElement("span",null,this.props.incorrectWords))),r.a.createElement("button",{className:"reset-button",onClick:function(){console.log("Reset button clicked"),e.props.resetGame()}},"Reset")))}}]),a}(r.a.Component),v=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).setStarted=function(){n.setState({timerRunning:!n.state.timerRunning})},n.resetGame=function(){console.log("reset game called"),n.text=n.texts[Math.floor(10*Math.random())],n.timeInSec=60,n.setState({reset:!n.state.reset,correctWords:0,incorrectWords:0,timerRunning:!1,wpm:0,accuracy:100})},n.setCorrectAndIncorrectWords=function(e,t){n.setState({correctWords:e,incorrectWords:t})},n.timeUp=function(){n.setState({inputDisabled:!0})},n.finishGame=function(e){console.log("Time took to finish: ",e),n.timeInSec=e},n.findResult=function(e,t){console.log("Total letters typed: "+e+" incorrect letters: "+t+"timeInSec: "+n.timeInSec);var a=n.timeInSec/60,r=e/5/a-t/a;r=r.toFixed(2);var s=100*(e-t)/e;s=s.toFixed(1),console.log("WPM: "+r+" accuracy: "+s),n.setState({wpm:r,accuracy:s})},n.state={timerRunning:!1,correctWords:0,incorrectWords:0,reset:!1,inputDisabled:!1,wpm:0,accuracy:100},n.timeInSec=60,n.texts=["Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.","A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.","Another writing challenge can be to take the individual sentences in the paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the paragraph will have some connection to one another so it will be different. You also won't know exactly how many sentences will appear in the paragraph.","It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are needed, this tool can be a great way to get that. It's a good way to test your programming and that the tool being created is working well. Above are a few examples of how the random paragraph generator can be beneficial.","If you do find this paragraph tool useful, please do us a favor and let us know how you're using it. It's greatly beneficial for us to know the different ways this tool is being used so we can improve it with updates. This is especially true since there are times when the generators we create get used in completely unanticipated ways from when we initially created them.","In this exercise, the idea is to write a paragraph that would be a random passage from a story. An effective paragraph is one that has unity (it isn\u2019t a hodgepodge of things), focus (everything in the paragraph stacks up to the whatever-it-is the paragraph is about), and coherence (the content follows smoothly). For this exercise, the paragraph should be quick to read.","She made an attempt to straighten her tawny hair. Her voice quavered with emotion. \u201cYou must be a very lonely man, Judge Seagrave.\u201d Then she turned a gaze on him that might have ignited a rain-sodden haystack. And I\u2019m a lonely woman. It might be merely descriptive: Lines of weeds criss-crossed the cracked parking lot of the Seashell Motor Courts.","The flaking paint on the buildings had chalked to a pastel pink on walls covered with graffiti. Many of the windows had been smashed out. Where the sign had been, atop rusting steel posts, only the metal outline of a seashell remained. It might have action but no dialogue. Above ground was the medieval settlement of Skaar\u2019s Outpost, a fort to guard the cave entrance.","Terry didn't consider himself particularly unusual. Sure, he spent his teenage years as a willing and sometimes absurdly cheerful social outcast, upon adulthood immediately transitioned to playing side-kick to a magic-savvy private investigator, accidentally became the confidant of an apparently ageless time-traveler, and just recently declared war on a corporation.","Silence should be safe. Silence should tell him, even in the dark, that nothing approached him, that nothing nearby could hurt him. Nonetheless, he began to long for noise, especially for the noise of straight-forward confrontation. To fight an enemy directly would be a blessing compared to stumbling blind, searching for the voiceless, already destroyed him twice."],n.text=n.texts[Math.floor(10*Math.random())],n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"main"},r.a.createElement(h,{setStarted:this.setStarted,text:this.text,setWordCount:function(t,a){return e.setCorrectAndIncorrectWords(t,a)},reset:this.state.reset,inputDisabled:this.state.inputDisabled,findResult:function(t,a){return e.findResult(t,a)}}),r.a.createElement(f,{timerRunning:this.state.timerRunning,totalWords:this.text.split(" ").length,correctWords:this.state.correctWords,incorrectWords:this.state.incorrectWords,resetGame:this.resetGame,reset:this.state.reset,timeUp:this.timeUp,finishGame:function(t){return e.finishGame(t)},wpm:this.state.wpm,accuracy:this.state.accuracy}))}}]),a}(r.a.Component),w=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Typing Speed Test"))}}]),a}(r.a.Component);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.8a0f2abd.chunk.js.map