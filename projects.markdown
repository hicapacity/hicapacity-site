---
layout: default
title: Projects
---
<link href="/css/static.css" rel="stylesheet"></link>

Projects
==========
<div class="postHeaderRule"></div>

Current
-------
### > Streetgrindz ###
Web site, API, and mobile application(s) to locate food trucks in Hawaii.

<a href="/img/wp-uploads/2011/08/streetgrindz-iphone-app.png" class="pirobox" rel="single" title="StreetGrindz iPhone App"><img src="/img/wp-uploads/2011/08/streetgrindz-iphone-app.png" width="300"></a>

Github: [https://github.com/hicapacity/foodtrucks](https://github.com/hicapacity/foodtrucks)

Web: [https://github.com/hicapacity/foodtrucks](https://github.com/hicapacity/foodtrucks)

**Contact**

* iPhone contact: Austen Ito &mdash; austen [at] hicapacity [dot] org
* Android contact: Jason Axelson &mdash; jason.axelson [at] hicapacity [dot] org
* Web contact: James Wang &mdash; james [at] hicapacity [dot] org

***

### > Lemonade Alley ###
Brochure type iPhone app with the capability for a popular vote based on Facebook like. Potentially a map of the vendors as well.

Github Link: [https://github.com/hicapacity/lemonade_alley-iphone](https://github.com/hicapacity/lemonade_alley-iphone)

** Contact **

* James Wang &mdash; james [at] hicapacity [dot] org

***

### > Dealios ###
A Google Chrome extension that showcases deals from multiple sites based on a configured location.

<a href="/img/wp-uploads/2011/08/dealios-screenshot-normal.png" class="pirobox" rel="single" title="Dealios"><img src="/img/wp-uploads/2011/08/dealios-screenshot-normal.png" width="200"></a>

Github Link: [https://github.com/hicapacity/dealios](https://github.com/hicapacity/dealios)

Chrome extension page: [http://bit.ly/chrome-dealios](http://bit.ly/chrome-dealios)

** Contact **

* Austen Ito &mdash; austen [at] hicapacity [dot] org

***

Upcoming
--------

### > Tsunami Inundation Zones ###
Work has not yet started

***

### > Arduino Controlled Morse Code Transmitter/Receiver ###
Contact matthew [at] hicapacity [dot] org if you would like to start on this project

** Contact **

* Matthew Badeau &mdash; matthew [at] hicapacity [dot] org

***

### > Transparent LCD Window ###
Jason is currently working on this project. Here's a quick video of a potential goal: [http://www.youtube.com/watch?v=jPauljzA_6g](http://www.youtube.com/watch?v=jPauljzA_6g)

*** 

### > Touch Screen Coffee Table ###
Contact matthew [at] hicapacity [dot] org if you would like to start on this project

** Contact **

* Matthew Badeau &mdash; matthew [at] hicapacity [dot] org

***

### > NFC Enabled Door Locks ###
These will be door locks for entry into the space. We can do NFC or basic RFID. The membership tracking will be tied into this system.

***

### > Remote control transmitter ###
To send an IR code, a remote control turns on and off an IR LED. A binary code number is chosen for each control key and is first encoded with a simple encoding. There are several different encodings in popular use. Next the resulting bit stream is transmitted one bit at a time. To transmit a one, an LED is flashed rapidly at a carrier frequency usually around 40KHz for a fixed amount of time. To transmit a zero the LED is kept off for a fixed amount of time. An Arduino remote control can be constructed with a small keypad (or set of buttons), an LED and a small clock circuit (perhaps the Arduino could be used to generate the clock). The software on the Arduino would send fixed bit patterns each time a key is pressed by sending the bit pattern to an output pin. The output pin would enable or disable the external clock signal that would be fed into an IR LED. Alternately perhaps the Arduino could generate the clock signal internally and directly drive an IR LED. By reprogramming the Arduino with different fixed codes, different devices could be controlled or different key/code mappings could be established.

** Contact **

* Tim Newsham &mdash; tim [dot] newsham [at] gmail [dot] com

***

### > Remote control receiver ###
An Arduino receiver could be built easily using a premade IR receiver module. They can be found at radio shack for around $7. The device outputs a high value when an IR LED carrier signal around 40khz is detected, and a zero otherwise. An Arduino IR remote control receiver would be built to sample the output of such a receiver module. It would then decode the bitstream it received to a numeric code and deliver it over the USB port to a host computer for further processing. This would allow software on the host to process the IR codes and respond to them.

** Contact **

* Tim Newsham &mdash; tim [dot] newsham [at] gmail [dot] com