---
layout: post
title: CodingBobby | Phase Space
tags: [artwork, mathematics, chaos, attractors, digital-art]
---
{% assign gal = '/assets/images/phase-space' %}

The following graphics show the phase space of specific differential systems which contain periodically appearing attractors.
Unlike the typical three-dimensional [strange attractors](../#strange-attractors), they don't have a single bounding box no point will ever escape but many more, if not infinitly many covering the entire two-dimensional plane.

These systems can be generally written as

$$\dot{x} = -\,f(y)$$

$$\dot{y} = \,f(x)$$

where $$f$$ is an arbitrary function dictating the system's behaviour.
Planes are centered at $$(0,0)$$ unless otherwise stated.

Inspiration for this project was Cliff Pickover's book *CPCB*[^pickover-book] -- again, I know; it is like Gabriel's Horn of chaos for me.

## Plane Tesselation

Perhaps the simplest forms $$f$$ can take in order to produce a repeating pattern is this:

$$f(u) = \sin(u)$$

And here is the result:

<p><a href="{{ gal }}/phase-004.png" target="_blank">
  <img src="{{ gal }}/phase-004.png" loading="lazy" alt="Phase-Space" style="width: 60%"/>
</a></p>

It might already look chaotic but that is mostly because the the sampled points do not align with the pattern.
Let's add another term:

$$f(u) = \sin(u) + \sin^2(u)$$

<p><a href="{{ gal }}/phase-005.png" target="_blank">
  <img src="{{ gal }}/phase-005.png" loading="lazy" alt="Phase-Space" style="width: 60%"/>
</a></p>

Because these patterns actually get a bit repetitive, I won't show the following images with the same scale but zoom on more interesting regions.
Here, the frequency $$u$$ is modulated with another periodic function:

$$f(u) = \sin\left(u + \sin(u)\right)$$

<p><a href="{{ gal }}/phase-006.png" target="_blank">
  <img src="{{ gal }}/phase-006.png" loading="lazy" alt="Phase-Space" style="width: 60%"/>
</a></p>

We can change the impact of a specific term or modify its frequency by introducing a factor $$\varrho$$:

$$f(u) = \sin\left(u + \sin(\varrho\,u)\right)$$

$$\varrho = 5$$

<p><a href="{{ gal }}/phase-007.png" target="_blank">
  <img src="{{ gal }}/phase-007.png" loading="lazy" alt="Phase-Space" style="width: 60%"/>
</a></p>

Longer terms allow asymmetric use of $$\varrho$$:

$$f(u) = \sin\left(u + \sin^2(\varrho\,u)\right) + \sin\left(\varrho\,u + \sin^2(u)\right)$$

$$\varrho = 0.3$$

<p><a href="{{ gal }}/phase-009.png" target="_blank">
  <img src="{{ gal }}/phase-009.png" loading="lazy" alt="Phase-Space" style="width: 60%"/>
</a></p>

Even more chaotic behaviour happens with powers:

$$f(u) = \sin\left(\varrho^u + \sin^2(\varrho\,u)\right)$$

$$\varrho = 3.6$$

<p><a href="{{ gal }}/phase-008.png" target="_blank">
  <img src="{{ gal }}/phase-008.png" loading="lazy" alt="Phase-Space" style="width: 60%"/>
</a></p>

Other modulation functions are also interesting.
$$\tan$$ creates unexpectedly chaotic shapes:

$$f(u) = \sin\left(u + \tan^2(\varrho\,u)\right)$$

$$\varrho = 1.5$$

<p><a href="{{ gal }}/phase-003.png" target="_blank">
  <img src="{{ gal }}/phase-003.png" loading="lazy" alt="Phase-Space" style="width: 60%"/>
</a></p>

A magnification of the central swirl:

<p><a href="{{ gal }}/phase-003a.png" target="_blank">
  <img src="{{ gal }}/phase-003a.png" loading="lazy" alt="Phase-Space Magnification" style="width: 60%"/>
</a></p>


## Randomness

Some tesselations get finer and finer towards larger $$x$$ and $$y$$ until their details hit a limit where the step size $$\dot{x}$$ and $$\dot{y}$$ respectively is greater than the period of the pattern.
Because the points are moving too fast, they overshoot their correct trajectory and get trapped in a neighbouring attractor, which they leave again shortly afterwards.
As a result, they walk seemingly randomly across the plane.

$$f(u) = \sin\left(u^3 + \sin^2(\varrho\,u)\right)$$

$$\varrho = 3$$

<p><a href="{{ gal }}/phase-001.png" target="_blank">
  <img src="{{ gal }}/phase-001.png" loading="lazy" alt="Phase-Space" style="width: 60%"/>
</a></p>

When the velocity is reduced, the non-random area extends, resolving finer details of the true phase space:

<p><a href="{{ gal }}/phase-002.png" target="_blank">
  <img src="{{ gal }}/phase-002.png" loading="lazy" alt="Phase-Space" style="width: 60%"/>
</a></p>

Here is a magnification of the transition between non-random to random walk (in the bottom right quadrant):

<p><a href="{{ gal }}/phase-001a.png" target="_blank">
  <img src="{{ gal }}/phase-001a.png" loading="lazy" alt="Phase-Space Magnification" style="width: 60%"/>
</a></p>

The "moment" when a trajectory is deflected towards another attractor is clearly visible.
These are the same points but they are moving with half the velocity (like in the larger images above):

<p><a href="{{ gal }}/phase-002a.png" target="_blank">
  <img src="{{ gal }}/phase-002a.png" loading="lazy" alt="Phase-Space Magnification" style="width: 60%"/>
</a></p>


---
{: data-content="footnotes"}

[^pickover-book]: C.A. Pickover, 1990. \"Computers, Pattern, Chaos, and Beauty\". St. Martin's Press. ISBN: 0312041233.
