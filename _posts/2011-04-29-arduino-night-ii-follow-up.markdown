--- 
layout: post
title: Arduino Night II Follow-up
wordpress_id: 68
wordpress_url: http://hicapacity.org/?p=68
date: 2011-04-29 07:00:16 -10:00
author: Matthew Badeau
categories: ['Event']
tags: ['arduino', 'oceanit']
---
<a href="http://farm6.static.flickr.com/5029/5663970046_c0cf5ac353.jpg" rel="single" class="pirobox" title="Mood lamps"><img title="Arduino Night II" src="http://farm6.static.flickr.com/5029/5663970046_c0cf5ac353.jpg" alt="Mood lamps" width="276" height="368" class="imgRight" /></a>

Thank you everyone for showing up to <strong>Arduino Night II</strong>, I had a lot of fun! Pictures of the night are posted at: <a title="HI Capacity photos on Flickr" href="http://www.flickr.com/photos/hicapacity" target="_blank">http://www.flickr.com/photos/hicapacity</a> :) I'm hoping since Tuesday night's <a title="HI Capacity Presentation" href="http://bit.ly/hicapacity2-presentation" target="_blank">presentation</a> that you have a better idea on how things work and how you may be able to make your own circuits. I have a few notes from the night that will help you along with future Arduino projects.

Last night we learned a lot, and hopefully you were able to retain all of that information. :)  One thing you have to remember is that you need the correct resistor values while working on your project. Datasheets that come with your parts will usually include the necessary voltage and current requirements. If you have trouble, you can email us for help or bring the project to our next meet.
The photoresistor or light dependent resistor (LDR) was slightly difficult to assemble at first but I'm glad everyone was able to complete that portion. Remember, the LDR (as with other resistors) are not polarized, so the direction the bars are facing does not matter. This only mattered when using the diodes, as the bar should be on the cathode(-) side.
I mentioned briefly about "shift registers." They're tiny integrated circuits that allow you to expand a pin's output. For example, a lot of shift registers include 8 outputs that only require one Arduino pin as input. Here is a video explaining the concept: <a href="http://www.youtube.com/watch?v=R7xI-flj1Mw" target="_blank">http://www.youtube.com/watch?v=R7xI-flj1Mw </a>

Jason was having problems with his <strong>delay() </strong>function in the Arduino IDE while using Fedora. He was able to fix this by putting:<strong> #include &lt;util/delay.h&gt;</strong> at the beginning of the code and then using the <strong>_delay_ms(500);</strong> instead. This should resolve any issues with the delay on Fedora.

Once again, thank you for coming out and participating!  Thanks to Ian and Oceanit for once again providing HI Capacity use of their facilities.  I had a lot of fun and remember to keep looking here for more events in the future!  If you'd like to see something presented, remember to check out our Google Moderator group! <a href="http://bit.ly/hicapacity-moderator">http://bit.ly/hicapacity-moderator</a> Add an idea today! :)  Stay tuned as we have Homebrew Night and Programming Night coming up in the next few weeks.

Email me if you have questions or corrections: <a href="mailto:matthew@hicapacity.org">matthew@hicapacity.org</a>