---
slug: "/demos/tfl-tamagotchi"
date: "2019-05-05"
title: "TamagoTrain - Look after a TFL station platform in Realtime"
featureImage: hub-tamagotchi.jpg
demo: https://tamagotrain.glitch.me/
repo: https://glitch.com/edit/#!/tamagotrain
---

## The  Station Manager game with Realtime Tube data

This demo uses the [Ably Hub TFL data stream](https://www.ably.io/hub/ably-tfl/tube) to power a Tamagotchi style game where the player manages a station platform in realtime. As trains arrive into the station in real life, effects are triggered in the game which the user has to mitigate:

* Trains raise the temperature of your station, as do passengers
* If it gets too hot, passengers will start to faint!
* Unconscious passengers can't leave the platform 
* Passengers sometimes drop litter
* Too much litter attracts mice!
* Trash and mice all take up space on the platform making it difficult for your passengers to exit
* If your platform gets too full, too hot or too cold your station will have to shut and your game will end

## How To Play

* Clean the platform to clear away litter
* Vent cold air through the station to keep everyone cool (but don't get carried away!)
* Passengers departing through the exit will cool the platforms down a little
* Departing trains also cool the platform slightly
* You can charm mice with songs! They'll find their way off the platform if musically enticed
* Music will also wake up fainted passengers

## Game Code 

The game is an expressJS app. It is split into two parts - the simulation/game loop, which runs in 'ticks' and the ui/render loop which runs at 30 frames per second. This separation prevents us from tying the game logic to the frame rate, which will reduce the chance of the frame rate dropping if the game logic gets complicated.
