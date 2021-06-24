---
layout: attractor
equations:
  - $$\dot{x} = y - a\, x + b\, y\, z$$
  - $$\dot{y} = z + c\, x - x\, z$$
  - $$\dot{z} = d\, x\, y - h\, z$$
constants:
  - $$a = 3$$
  - $$b = 2.7$$
  - $$c = 1.7$$
  - $$d = 2$$
  - $$h = 9$$
thumbnail: dadras-momeni-01.webp
images:
  - preview: dadras-momeni-02.webp
    full: dadras-momeni-02.png
---
Quite recently found by the electrical engineers Sara Dadras and Hamid Momeni in 2009, this attractor is special because it changes its scrollness when varying just one parameter.[^original-paper]
At $$c = 4.7$$, the chaotic attractor shows just two wings, at $$c = 3.9$$ it suddenly evolves four scroll-like wings and at $$c = 1.7$$ it goes back to tree scrolls.
Around these values several things happen:

- $$0 < c \le 0.77$$: single stable point
- $$0.77 < c \le 1.5$$: single stable oscillation
- $$1.5 < c \le 4.45$$: chaos
- $$4.45 < c < 5.17$$: several regions of stable oscillations with chaotic outbreaks inbetween
- $$5.17 \le c < 7$$: multiple stable limit cycles


## Renders
### Three-Scroll

{% include attractor_details.html %}

### Four-Scroll

As above, $$c = 3.9$$.

<p><a href="/assets/images/attractors/dadras-momeni-01.png" target="_blank">
  <img src="/assets/images/attractors/dadras-momeni-01.webp" loading="lazy" alt="Dadras-Momeni"/>
</a></p>

---
{: data-content="footnotes"}

[^original-paper]: S. Dadras and H. R. Momeni, 2009. \"A novel three-dimensional autonomous chaotic system generating two, three and four-scroll attractors\". Phys. Let. A. 373(40). [doi:10.1016/j.physleta.2009.07.088](https://doi.org/10.1016/j.physleta.2009.07.088).
