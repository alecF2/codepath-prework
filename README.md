# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Alec Atienza**

Time spent: **4** hours spent in total

Link to project: https://glitch.com/edit/#!/glib-midi-sunday

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [ ] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!
- [x] Display of lives left

## Video Walkthrough

Here's a walkthrough of implemented user stories:

### Success:

![](https://i.imgur.com/cHLCEbg.gif)

### Failure:

![](https://i.imgur.com/8IwgVPW.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

   - Mozilla MDN Web Docs
   - W3Schools

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

   - A challenge I encountered while creating this was implementing a timer and having it go off during
     specific events only. I figured I would have to do something similar to the start and stop buttons, in which
     only one of the buttons is visible at a point in time. So, I made 12 different paragraph elements, 11 of them
     containing seconds 00:00 to 00:10, and then the last one being a filler to indicate that time is not running.
     Then, I ran into issues figuring out where in my JavaScript code to implement the timer changes and also how
     to implement the timer itself. There was a hint to use setInterval() and clearInterval() in the prework instructions,
     so I read about those functions on Mozilla's MDN Web Docs. I ended up writing a function which ran setInterval() with
     an inline function which would hide the current timer number and unhide the new timer number every second. Within the
     function, clearInterval() is called when the timer runs out. I thought this would be the only place that I would
     need clearInterval(), but after testing different cases, I realized I needed to add clearInterval() in several
     other places in my code. I realized that a clearInterval() call was needed whenever the game was stopped, if the
     player entered a correct guess, or if they entered an incorrect guess. The clock stopping issue was solved, but
     along with stopping the timer from running, I also needed to remove the current time and replace with the filler
     I mentioned above. I also needed to set my timer variable back to 10 so the timer would be able to start
     at the correct time upon resuming or starting a new game. I added all of these changes where necessary. Of course,
     there were multiple moments where I ran through some testing and figured that the game wasn't performing how I
     intended it to. In these cases I would first read through my code and see if it made sense, and if I couldn't exactly
     pinpoint where my mistake was I ended up logging values to console to make sure I was using the correct variables
     or values in my statements.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

   - One thing I became curious about after completing this is the amount of time it takes to develop a full-blown website.
     This project took me about 4 hours including the optional features, so I am definitely curious about how much time and
     extra effort it would take to work on a website of much higher complexity and scale. Another thing I became curious about
     upon completing this project was backend programming. A lot of this project was frontend based, so I am pretty curious
     about what can be accomplished behind the scenes. I also became curious about the common workflow in web development.
     For example, I'd like to know what web developers prioritize implementing first, and what aspects of websites they find
     more important than others. One last thing I'm curious about is working in teams. I'd like to know how things are split
     up when a team works on a website together and how they interact with each other throughout the process.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   - I think there are a lot of things that could be added to this project. First off, I would try to implement a pause button,
     so that a player can take a break in between turns if they need to. I would also, even though it may be time consuming, try
     to implement a starting screen, in which the player can choose between different difficulty modes. For example, if they picked
     easy, the game would only present 4 buttons with a max pattern of 6 notes; if they picked intermediate, the game would present
     6 buttons with a max pattern of 10 notes; and if they picked hard, the game would present 10 buttons with a max pattern of 16
     notes. I would assume that this would take a large amount of element style changes within my JavaScript code. I would also
     want to spice up the design of the game. For example, I would use different fonts for the h1 and p elements and I would change
     the style of the buttons a bit just to make the appearance of the game more appealing. I also would want to move away from
     using alerts to notify the user if they have won or lost the game. Instead, I would want to add in a box stating "You Win"
     or "You Lose" along with a "Play again" button which would appear when necessary.

## License

    Copyright Alec Atienza

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
