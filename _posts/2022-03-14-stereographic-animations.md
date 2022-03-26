---
layout: post
title: "Stereographic Animations"
date: 2022-03-14
tags: [mathematics,coding,visualisation,science]
authors: [Bob]
comments: true
---
Happy Pi-Day everyone!

When I recently found a postcard I got from a friend some years back, I was hooked.
The front showed one of those magic-eye-autostereograms[^wikipedia] you might as well know.
You don't?
Well, you have missed loads of joy![^impossible]

Anyway, because this year's Pi-Day was just around the corner, I wanted to create some stereograms with $$\pi$$-inspired motifs.
But heck, creating patterns that first of all look nice and secondly fit the magic requirements turned out to be very difficult[^patterns].
I eventually gave up on that idea (so, no Pi things this time) but I was still struck by the amazingly simple working principle of stereograms.[^koeller]

After I clearly understood how they work and what properties work better than others, I still needed good motifs.
Those typical ones – cubes, hearts, trumpets, or similar simple objects – were too low level for my demands, especially if I don't even have a pattern to hide them.
But then I remembered that I always wanted to get a more profound feeling of the attractors[^attractor-journey].
I calculated them, I manipulated them, I interacted with them in 3D software and I even printed large renders of them onto paper – but none of that gave me a true feeling of their three differential equations.

So, here I ended up creating very non-magical-looking 3D images that are two 2D images unless you perform weird eye movements.

## Train Your Abilities

Here is a "training" image for you, if you are not familiar with how stereograms work:

![training-for-stereograms](/assets/images/stereo-training.png)

All you have to do is to look through the screen as if you focus a distant object behind it.
Make your eyes independently leave the single spot you currently look at somewhere on the screen and let them wander apart.
Imagine firing lasers from your eyes, but those lasers have to shoot parallel to each other and not cross in front of the screen.

If you manage to do it, you get an odd feeling and see everything double at first.
The two red dots will help you to move your eyes the right amount; each of the dots will split into two (now four dots in total) which then move further apart the more you "stretch" your eyes.
The middle two dots will come closer to each other, while the outer ones move away.
Now, try to align those two middle dots (right dot that emerged from the original left dot and the left dot which emerged from the right one).
Aligning the dots can help to fixate your sight, and you can try to carefully look around without changing your eye's relative position.

You are ready for what comes next if you can see that there now appear to be three dots in total – a middle one consisting of the two ones you aligned before, one further on the left, and one on the right of it.
If you have problems fully aligning the dots, the image might be displayed too large, so scale down this website (about 10 cm between the dots is ideal); or your head is slightly tilted.

## Almost-Holograms of some Attractors
The following renders are not just images, but animations of some selected attractors rotating in space.
In reality, the lines representing the trajectories should be very thin.
I have given them thickness and an initial sense of depth by adding a shading depending on how far away the lines are.
The two red dots are also included so that you get your eyes fixated easier.
Please adjust the website's scale if necessary.

If you do everything correct, you should be able to see the attractor that appears to pop out of the screen in the middle of each animation[^focussing].
You should get a very strong, almost hologram-like feeling of three dimensions that is intensified by the slow rotation.
Enjoy!

### [Nosé-Hoover](/projects/chaotic-shapes/nosé-hoover)

<video controls autoplay loop style="width: 100%;" poster="/assets/images/attractors/nose-hoover-stereo.png">
  <source src="/assets/images/attractors/nose-hoover-stereo.mp4" type="video/mp4">
</video>

### [Sprott-D](/projects/chaotic-shapes/sprott-d)

<video controls loop preload="none" style="width: 100%;" poster="/assets/images/attractors/sprott-d-stereo.png">
  <source src="/assets/images/attractors/sprott-d-stereo.mp4" type="video/mp4">
</video>

### [Sprott-G](/projects/chaotic-shapes/sprott-g)

<video controls loop preload="none" style="width: 100%;" poster="/assets/images/attractors/sprott-g-stereo.png">
  <source src="/assets/images/attractors/sprott-g-stereo.mp4" type="video/mp4">
</video>

### [Thomas](/projects/chaotic-shapes/thomas)

<video controls loop preload="none" style="width: 100%;" poster="/assets/images/attractors/thomas-stereo.png">
  <source src="/assets/images/attractors/thomas-stereo.mp4" type="video/mp4">
</video>

### [Li](/projects/chaotic-shapes/li)

<video controls loop preload="none" style="width: 100%;" poster="/assets/images/attractors/dequan-li-stereo.png">
  <source src="/assets/images/attractors/dequan-li-stereo.mp4" type="video/mp4">
</video>

I hope this little series has given you goosebumps and joy just as it has me.
It is a bit challenging to adapt the eye movements, but getting used to it is really rewarding.
Finally seeing the attractors in actual 3D[^dimensions] revealed their beauty in a very pure form.

There will probably be more animations and more attractor renders in the future, so I'm going to update the according page in my gallery [here](/projects/chaotic-shapes).
There, you can also read more about chaos and find the precise equations and parameters I have used.

Have a great Pi-Day (or whatever-day you are reading this on) and take care, *Bob*.

---
{: data-content="footnotes"}

[^wikipedia]: Wikipedia has a detailed [article](https://en.wikipedia.org/wiki/Autostereogram) about how they function and how clever patterns can increase the effects. 

[^impossible]: It might be the case that it is actually impossible for you to see the 3D images. If you only have one functioning eye, amblyopia, or if you are stereoblind because of other reasons, you are sadly not able to see the effect.

[^patterns]: I could have taken the lazy route and use random dot patterns, but those are not very exciting and only act as a kind of magic curtain to hide the object from plain sight.

[^koeller]: [Jürgen Köller](http://www.mathematische-basteleien.de/stereogram.htm) shows more viewing techniques and nicely explains, how you can even draw simple stereograms by hand.

[^attractor-journey]: My journey started [here](../beautiful-chaos) just over a year ago.

[^focussing]: If you look at stereograms more frequently, you should be able to even focus correctly such that the attractors appear very sharp. Your brain is used to focus your lenses in accordance with your eye's movements (the angle between the lasers you shoot), so focussing on the near screen whilst preserving an eye fixation that is normal for faraway objects can be hard.

[^dimensions]: Technically, it is the pretty much the same thing as if your brain would process what your eyes see when looking at a real object. The key here is to provide a slightly shifted and rotated image for the right eye. Virtual reality goggles do the same to trick your brain – but these autostereograms are even cooler, as you don't need any additional tools!