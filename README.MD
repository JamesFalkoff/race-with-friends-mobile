# Race With Friends - mobile side

Race with Friends is a social fitness app built on React Native that enables real-time competition between users. Runners are able to race against live opponents (via websockets) or recordings of their friends' runs while receiving real-time audio and haptic feedback based on their progress vs. the real or simulated opponent.

![Screenshots](http://sscchan.github.io/blog/content/images/2017/04/RwfScreenSideBySide.png)

## Team

  - __Product Owner__: Nick Cobbett
  - __Scrum Master__: James Falkoff
  - __Development Team Members__: Derrick Chan, Stephen Chan

## Development

This repo contains the code for the mobile client. The client will only work properly if the server-side code is running (see https://github.com/JamesFalkoff/race-with-friends-server).

From within the root directory:

```sh
npm install
react-native link
react-native run-ios
```
