// global constants
const clueHoldTime = 300; // how long to hold each clue's light/sound
const cluePauseTime = 150; // how long to pause in between clues
const nextClueWaitTime = 1000; // how long to wait before starting playback of the clue sequence

// Global variables
var pattern = [
  Math.floor(Math.random() * 6 + 1),
  Math.floor(Math.random() * 6 + 1),
  Math.floor(Math.random() * 6 + 1),
  Math.floor(Math.random() * 6 + 1),
  Math.floor(Math.random() * 6 + 1),
  Math.floor(Math.random() * 6 + 1),
  Math.floor(Math.random() * 6 + 1)
];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; // must be between 0 and 1
var guessCounter = 0;
var mistakesCounter = 0;
var timer = 10;
var startTimer;

function startGame() {
  // initialize game variables
  progress = 0;
  mistakesCounter = 0;
  timer = 10;
  gamePlaying = true;
  pattern = [
    Math.floor(Math.random() * 6 + 1),
    Math.floor(Math.random() * 6 + 1),
    Math.floor(Math.random() * 6 + 1),
    Math.floor(Math.random() * 6 + 1),
    Math.floor(Math.random() * 6 + 1),
    Math.floor(Math.random() * 6 + 1),
    Math.floor(Math.random() * 6 + 1)
  ];

  // swap start and stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");

  document.getElementById("lives3").classList.remove("hidden");

  playClueSequence();
}

function stopGame() {
  gamePlaying = false;

  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");

  clearInterval(startTimer);
  document
    .getElementById("second" + (timer + 1).toString())
    .classList.add("hidden");
  document.getElementById("filler").classList.remove("hidden");
  timer = 10;

  document
    .getElementById("lives" + mistakeNum(mistakesCounter).toString())
    .classList.add("hidden");
  document.getElementById("lives3").classList.remove("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; // set delay to initial wait time
  setTimeout(runTimer, 450 * progress + 550);
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function mistakeNum(num) {
  if (num == 1) {
    return 2;
  } else if (num == 2) {
    return 1;
  } else {
    return 0;
  }
}

function runTimer() {
  startTimer = setInterval(() => {
    console.log("function running");
    document
      .getElementById("second" + timer.toString())
      .classList.remove("hidden");
    if (timer == 10) {
      document.getElementById("filler").classList.add("hidden");
    } else {
      document
        .getElementById("second" + (timer + 1).toString())
        .classList.add("hidden");
    }
    timer--;
    if (timer + 1 == 0) {
      mistakesCounter++;
      document
        .getElementById("lives" + (mistakeNum(mistakesCounter) + 1).toString())
        .classList.add("hidden");
      document
        .getElementById("lives" + mistakeNum(mistakesCounter).toString())
        .classList.remove("hidden");
      if (mistakesCounter == 3) {
        // 3 guesses wrong, game over
        loseGame();
      } else {
        // replay last clue
        clearInterval(startTimer);
        document
          .getElementById("second" + (timer + 1).toString())
          .classList.add("hidden");
        document.getElementById("filler").classList.remove("hidden");
        timer = 10;
        playClueSequence();
      }
    }
  }, 1000);
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  if (btn == pattern[guessCounter]) {
    // guess was correct
    if (progress == guessCounter) {
      // turn is over
      console.log("second" + timer.toString());
      clearInterval(startTimer);
      document
        .getElementById("second" + (timer + 1).toString())
        .classList.add("hidden");
      document.getElementById("filler").classList.remove("hidden");
      timer = 10;
      if (progress == pattern.length - 1) {
        // last turn, so game is over, and game is won
        winGame();
      } else {
        // move on to next clue
        progress++;
        playClueSequence();
      }
    } else {
      // turn isn't over, so increment guessCounter
      guessCounter++;
    }
  } else {
    mistakesCounter++;
    document
      .getElementById("lives" + (mistakeNum(mistakesCounter) + 1).toString())
      .classList.add("hidden");
    document
      .getElementById("lives" + mistakeNum(mistakesCounter).toString())
      .classList.remove("hidden");
    if (mistakesCounter == 3) {
      // guess is wrong, game over
      loseGame();
    } else {
      // replay last clue
      clearInterval(startTimer);
      document
        .getElementById("second" + (timer + 1).toString())
        .classList.add("hidden");
      document.getElementById("filler").classList.remove("hidden");
      timer = 10;
      playClueSequence();
    }
  }

  // if (timer == 0) {
  //   // ran out of time
  //   loseGame();
  // }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

// Sound Synthesis Functions
const freqMap = {
  1: 220,
  2: 247,
  3: 262,
  4: 330,
  5: 392,
  6: 440
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(() => {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
