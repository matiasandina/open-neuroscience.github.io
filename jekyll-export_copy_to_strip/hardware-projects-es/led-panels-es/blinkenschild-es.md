---
id: 3139
title: Blinkenschild
date: 2018-05-09T03:36:02+00:00
author: amchagas
layout: page
guid: http://openeuroscience.com/hardware-projects/led-panels/blinkenschild-copy/
geo_public:
  - "0"
---
Blinkenschild is actually a portable sign consisting of 960 RGB LEDs. The images/movies to be displayed are stored in a SD card in a Teensy3 board and controlled via bluetooth. Resolution is not as high as LCD monitors but the refresh rate is much higher:

> This is done in realtime and pixelvalues are recalculated before display.
> 
> This is still too fast so i had to add 30 ms delay between the frames or we would not perceive it as a fluid animation but rather just blinking bright light.

&nbsp;

<span class="embed-youtube" style="text-align:center; display: block;"></span>