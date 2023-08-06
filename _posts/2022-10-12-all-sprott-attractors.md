---
layout: post
title: "The 19 Sprott Attractors"
date: 2022-10-12
tags: [journal, visualisation, mathematics]
authors: [Bob]
comments: true
---
Big news everyone!
I now have my own online shop.
Wait, whoa, how did that happen?

Well, I've done experiments the other day -- again, with renders of strange attractors -- and I focussed on those found by J.C. Sprott in 1994.
He discovered 19 distinct cases of the most simple chaotic attractors possible, some of which I have rendered artistically [here](/projects/chaotic-shapes).

Because Sprott's work is pretty significant, I wondered why I couldn't find much resources about them online, comparisons of the attractor's features for example.
Obviously, there has been done extensive scientific research on the systems (more than 800 articles cite the original publication), but even among those that do direct analysis most of the times do it on only one or two of Sprott's cases.
I wanted to change that, though, as I am no mathematician, my approach to this is not to look at the formulas, but at the visuals.

<p><a href="/assets/images/attractors/sprott-a-02.png" target="_blank">
  <img src="/assets/images/attractors/sprott-a-02.webp" loading="lazy" alt="The Sprott-A Attractor" style="width: 80%"/>
</a></p>

Until now, I only had time to take a look at the cases [A](/projects/chaotic-shapes/sprott-a), [D](/projects/chaotic-shapes/sprott-d), and [G](/projects/chaotic-shapes/sprott-g); and afterwards, I came up with a simple but very elegant way of rendering 3D attractors with only a line that still gets a three dimensional look by varying the line's thickness and brightness[^render-technique].
You can find that technique used in stereographic animations I show beneath the usual renders and in my past blog post [here](../stereographic-animations).
I now improved it a bit and created still images of *all* of those 19 Sprott attractors.

And here is the collage I made with them:

<p><a href="/assets/images/attractors/sprott-attractors.png" target="_blank">
  <img src="/assets/images/attractors/sprott-attractors-small.png" loading="lazy" alt="The Sprott Attractors" style="width: 60%"/>
</a></p>

Since I have printed the Nosé-Hoover attractor [back in the day](../printing-digital-art) for my own wall, I have thought about offering something to you dear readers.
As I explained, I find it a pity that nowadays almost all digital images will only accumulate virtual dust, never become physical -- and I want to change that not only for myself, but also for you, who will definitely enjoy the beautiful chaos of the attractors even more when it is printed on actual paper.

So, here it is, with oh-so many products, my shop:

<p class="rainbow-text"><a href="https://shop.codingbobby.xyz" target="_blank">
  shop.codingbobby.xyz
</a></p>


PS: If the poster is a little too much for you, I have also made postcards from some of the Sprott cases, which I'd be happy to send you in return for a small donation.


<style>
.rainbow-text {
	font-size: 2.5rem;
  text-align: center;
}
.rainbow-text:hover a {
  text-decoration: none;
}

.rainbow-text:hover {
	background: linear-gradient(to right, violet, indigo, blue, green, yellow, orange, red);
	background-size: 300%;
  
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: animated_text 10s ease-in-out infinite;
	-moz-animation: animated_text 10s ease-in-out infinite;
	-webkit-animation: animated_text 10s ease-in-out infinite;
}

@keyframes animated_text {
	0% { background-position: 0px 50%; }
	50% { background-position: 100% 50%; }
	100% { background-position: 0px 50%; }
}
</style>


---
{: data-content="footnotes"}

[^render-technique]: The wallpaper-style renders I have done before do reward you with a realistic look and great detail, but adjusting attractor model, design the set around it, model supporting objects and fine-tune materials and the lighting setup takes a lot of time -- not to mention the actual time it takes to ray-trace the scene during rendering. No doubt, I will continue creating these, but for this project, showing the raw attractors with a look free from any distractions worked perfectly. The "Rendering" I'm doing here is really quick and I only have to adjust parameters like orientation, simulation speed and framing when moving to a new attractor system.