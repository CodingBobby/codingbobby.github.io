---
layout: post
title: CodingBobby | Shapes of Chaos
tags: [artwork, mathematics, differential systems, wallpaper]
---
## Attractors

When studying fluid dynamics and heat transfer I learned about chaos and the attractors.
My first encounter was with the Lorenz attractor, of course (read [this blog post](/blog/beautiful-chaos)).
The pure beauty of its unpredictable but organic shape hooked me from the first minute – I believe this feeling will stay with me forever.

So here is a small collection of rather simple but in a way artistic renderings of attractors I made for fun.
Click on the images to find out more about them.

{% include attractor_gallery.html %}

> In a chaotic system, the trajectory moves around on the attractor as time goes on, but two nearby points separate exponentially so that eventually they are very far apart.
> Although their future is determined uniquely and precisely by the governing equations, very small differences in the starting point can make large differences in the future conditions.
> Although tomorrow’s weather depends on the conditions today, and the weather the day after tomorrow depends on the conditions tomorrow, small errors in measuring the current weather eventually grow until all hope of predictability is lost -- the 'butterfly effect'.
>
> <span class="align-right">-- Julien Clinton Sprott</span>


## Fractals

Julia-Set, "chaotic curl"

$$f(z) \rightarrow z^2 + \mu$$

$$\mu = -0.746 + 0.172\,i$$

with $$400$$ maximum iterations using Pickover's convergence-test $$3$$ and halftone shading.[^convergence]
Center of the image is at $$z = -0.1079 + 0.0566\,i$$.

<p><a href="/assets/images/fractals/julia-01.png" target="_blank">
  <img src="/assets/images/fractals/julia-01.webp" loading="lazy" alt="Julia-Set" style="width: 60%"/>
</a></p>

---
{: data-content="footnotes"}

[^convergence]: Depending on the form of $$z$$ and the numbers of iterations reached before diverging out of the set bounds, the displayed pixels are coloured differently. Pickover introduced three tests in his book *CPCB*[^pickover-book] and accidentally found a fourth one because of a bug in his code.

[^pickover-book]: C.A. Pickover, 1990. \"Computers, Pattern, Chaos, and Beauty\". St. Martin's Press. pp 102–104, p 119. ISBN: 0312041233.
