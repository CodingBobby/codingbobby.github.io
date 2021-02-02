---
layout: post
title: "Beautiful Chaos"
date: 2021-02-02
tags: [journal, science, engineering, visualisation]
authors: [Bob]
comments: true
---
Hello everyone,
nice to see you again.
I know this is a bit late, but I wish you a great new year nontheless.

So I was in a lecture yesterday and the topic was the simulation of differential equations that are difficult or even impossible to solve analytically.
The professor is one of my favourite lectures at my university – he is one of the older generations and often anecdotes from his time as a student arise, how they had just one central computer for the entire department with oh so amazing 1 MB of storage.

Anyways, we quickly got into fluid dynamics and even more quickly there was chaos.
Prima facie, an idea of a cold and a hot plate you bring close to each other seems very simple.
But oh dear, the crazy stuff that comes out of it is just… jaw-dropping.
Although, by the sketches the professor presented, things seemed somewhat familiar for me.
I wondered why and when thoughtfully looking around, my eyes got stuck on my bookshelf where *Chaos* by James Gleick was smirkingly sitting.
Jumped up, leaped across the room, grabbed the book, leaped across the room, plopped back down.
And yep, everything was in there.
Not with mathematical details but with great descriptions, images and lots of history.

After the lecture I buried myself in *Chaos*, reading the important pages a second time.
Because I was in such a phase of fascination, more than just pictures was required to satisfy.
Some Excel-calculations later (yes, I am completely sane)[^excel], I was in a state Gleick described:
Not sure what to expect but mostly confident that it won't work.
And it turned out to be beautiful.

The Lorenz attractor is a structure of chaos that solves a particular set of differential equations which are:

$$\dot{x} = \alpha\, (y - x)$$

$$\dot{y} = x\, (\beta - z) - y$$

$$\dot{z} = x\, y - \gamma\, z$$

If you don't get what you see, it's not much of a problem, because Wikipedia has a decent article about that system.[^wiki]
As you can see, the set consists of three equation describing $$x$$, $$y$$ and $$z$$ ($$\alpha$$, $$\beta$$ and $$\gamma$$ are constants).
Unfortunately, Excel's plots can only display two dimension at a time.
Below you can see the attractor viewed from the three different axes:

<p style="display:flex">
<a href="/assets/images/lorenz+z.svg" target="_blank"  style="flex:30%;width:30%"><img src="/assets/images/lorenz+z.svg"></a>
<a href="/assets/images/lorenz+y.svg" target="_blank"  style="flex:30%;width:30%"><img src="/assets/images/lorenz+y.svg"></a>
<a href="/assets/images/lorenz+x.svg" target="_blank"  style="flex:30%;width:30%"><img src="/assets/images/lorenz+x.svg"></a>
</p>

Then, after a while of tinkering around with the settings in Excel, I wanted even more because black thin lines aren't quite satisfactory. And this is the wallpaper I made for my desktop:

<a href="/assets/images/lorenz_attractor_wp.png" target="_blank">
![Lorenz Attractor Wallpaper](/assets/images/lorenz_attractor_wp.png)
</a>

## Conclusion
Well what a day!
There is probably potential for optimisations, and this might just be the start of something.
I would really want to create more similar wallpapers with other mathematical objects.
Or maybe even posters?
If anything, the first place to share it will be here.
Also, if you too want to set this one as your desktop background, you can click the image (the others above as well) to enlarge and then save it.


---
{: data-content="footnotes"}

[^excel]: If you aren't sure what I mean, go ahead and read [this post](../excel-equivalent-stress).

[^wiki]: You can find the wiki article [here](https://en.wikipedia.org/wiki/Lorenz_system).