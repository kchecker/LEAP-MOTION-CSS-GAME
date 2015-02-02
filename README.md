# LEAP-MOTION-CSS-GAME
This prototype shows the usage of CSS and LEAPJs in creating 3D Games.

[Watch Gameplay](youtube)

In this Game, I'm using
--* Leap motion Device and LeapJs to steer the jet plane.
--* CSS 3D transforms to draw the city with everything in it.
--* Javascript to set the game in motion

The buildings, plane and other 3d objects are HTML DOM elements transformed using CSS3.The day-night rotation is implemented with CSS transitions (Although CSS animations can be used for the same).
      CSS is not meant for creating serious 3D games as there are Performance issues(even after using GPU) , Browser Support Issues and its limitations in creating 3D graphics.

***

##About Leap Motion

The Leap Motion system recognizes and tracks hands, fingers and finger-like tools. The device operates in an intimate proximity with high precision and tracking frame rate and reports discrete positions, gestures, and motion.This tracked frame data can be processed using LeapSDK. You can know more about Leap Motion SDK here .

***

##About CSS3

 CSS transforms allow us to change the position of elements without disrupting the normal document flow. Transforms are implemented using a set of CSS properties that let us apply transformations like rotation, skewing, scaling and translation in both the plane and 3D space. 
 CSS transition properties provide a way to control the animation speed in changing the properties over a given duration. We can also specify time intervals, durations and timing functions that follow a customizable acceleration curve. 
     
There are many examples across the web like [EXAMPLES].  and this Game version too can be taken to whole another level by adding more details and interaction or perhaps using WebGL , Canvas.

***

Useful Links for further reading:

1.[WebGL vs CSS 3D Transforms](http://blog.teamtreehouse.com/3d-in-the-browser-webgl-versus-css-3d-transforms)
2. [CSS3](http://css3.bradshawenterprises.com/transforms/  | Desandro's Intro : http://desandro.github.io/3dtransforms/)
3. [Leap Motion](http://leapmotion.com/  | LeapJs: https://developer.leapmotion.com/leapjs/getting-started) 
4. [Web Audio API](http://www.html5rocks.com/en/tutorials/webaudio/intro/) 
5. [TRIDIV](http://www.tridiv.com) 
6.[HTML5 Canvas](http://diveintohtml5.info/canvas.html) 
7.Other EXAMPLES
--1 .Keith Clark's http://keithclark.co.uk/articles/creating-3d-worlds-with-html-and-css/
--2.Michael Bromley's : http://www.michaelbromley.co.uk/blog/298/building-a-3d-game-with-css-html
--3.Others : http://www.freshdesignweb.com/html5-css3-3d-examples-demo.html
