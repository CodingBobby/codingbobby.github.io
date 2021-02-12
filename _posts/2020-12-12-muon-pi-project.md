---
layout: post
title: "The MuonPi Project"
date: 2020-12-12
tags: [science, journal, opinion]
authors: [Bob]
comments: true
---
Yesterday I joined an online talk about the new[^project-start] and very promising open science project [MuonPi](https://muonpi.org) a team from the Justus-Liebig-University in Gießen, Germany presented.
Their goal is to record and analyze the paths and intensities of muon showers that happen around the globe potentially hundreds of thousands of times per day.

![Presentation on BBB](https://pbs.twimg.com/media/Eo_Rt1YWEAIHkxX?format=jpg){:width='75%'}

Muons are relatively heavy elementary particles[^muon-mass] that are produced in high quantity when cosmic radiation interacts with matter in our atmosphere and these radiation bursts are indicators for large stellar events.
For the understanding of the universe and its history, the discovery of more of these events is crucial.
The half-life period of muons is very short but due to their super-high speeds of almost *c*, they perceive a significant length contraction and thus reach lower levels of the atmosphere where they can be detected before decay.

Typically, the detection of muons happens in rather large standalone research centres that are geologically limited to one area.
MuonPi now aims to change that by providing (surprisingly) inexpensive detector units that are designed to be user friendly so that anyone can host their own measuring station at home.
This way, a large number of small detectors can be spread around the world to form a network of recording locations that together act like one giant muon detector.
By dramatically increasing the area coverage, it is hoped to be able to detect even very rare super high energy showers that are currently only theoretical.
Below, you can see the parts this new detector consists of.

![Parts of the MuonPi detector](https://pbs.twimg.com/media/EgWZgLfWsAcFrN2?format=jpg){:width='75%'}

On the far right-hand side you can see an ordinary [RaspberryPi](https://raspberrypi.org) mini-computer that many makers and electronics fans already have at home or if not, is very cheap to get.
The detector hooked up to the Pi is made of a scintillator plate (wrapped in black light-blocking kevlar) that produces light flashes when muons pass through it, a photosensor that records them and a custom-designed PCB that achieves an impressive time accuracy of the detection.
The team has written a custom software stack which is partly hosted on their servers and partly on the RaspberryPi.
It not only includes the actual algorithms that filter data and compute relationships between the recorded events but also the detector drivers, network infrastructure, their website, wiki page, forum and even a graphical interface for settings, statistics and measurement data the user can gaze at.
And the best thing is that literally every piece of this is open source.

## Conclusion
I find the project very interesting and I am amazed by the sheer dedication and diligence the members have been putting into this despite all the difficulties this year has brought us.
I hope that MuonPi will eventually gain global attention, grow a large community and someday leads to discoveries we would not have made without this project.
They definitely will have my support in whatever form that will be.

So, if you are interested in physics, astronomy and DIY-projects, I highly encourage you visit their [website](https://muonpi.org) and [wiki](https://wiki.muonpi.org/index.php) to find out more about it.
Live data of what has been detected so far can be seen on their [monitor](grafana.muonpi.org:3000/d/KNmcHikMz/muonpi-overview).
And if you are not interested in physics, learn to be[^physics]!

Huge thumbs up for this open-everything community project and see you soon when I have updates on this.


---
{: data-content="footnotes"}

[^project-start]: The project started around 2016 as a small idea and slowly turned out to be potentially big. The core team started working heavily on it just this year.

[^muon-mass]: Muons have properties similar to electrons but have 200 times more mass.

[^physics]: Seriously, how could you not be?!
