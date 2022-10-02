---
layout: attractor
equations:
  - $$\dot{x} = a\, (y - x) + d\, x\, z$$
  - $$\dot{y} = k\, x + f\, y - x\, z$$
  - $$\dot{z} = - e\, x^2 + x\, y + c\, z$$
constants:
  - $$a = 40$$
  - $$d = 0.16$$
  - $$k = 55$$
  - $$f = 20$$
  - $$e = 0.65$$
  - $$c = 11/6$$
thumbnail: dequan-li-02.jpg
images:
  - preview: dequan-li-01.webp
    full: dequan-li-01.png
  - preview: dequan-li-02.jpg
    full: dequan-li-02.png
---
This differential system found by Dequan Li in 2008 is the result of a research about the scrollness of attractors and is the first one with smooth quadratic terms that produces three scrolls[^original-paper].
The system is derived from the [Lorenz system](../lorenz) by generalizing it to a "fuzzy" version which was then simplified.

## Renders

{% include attractor_details.html %}

## Stereographic Animation

<video controls loop style="width: 100%;" poster="/assets/images/attractors/dequan-li-stereo.png">
  <source src="/assets/images/attractors/dequan-li-stereo.mp4" type="video/mp4">
</video>

---
{: data-content="footnotes"}

[^original-paper]: D. Li, 2008. \"A three-scroll chaotic attractor\". Phys. Let. A. 372(4). [doi:10.1016/j.physleta.2007.07.045](https://doi.org/10.1016/j.physleta.2007.07.045).
