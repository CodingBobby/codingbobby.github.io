---
layout: attractor
equations:
  - $$\dot{x} = -y$$
  - $$\dot{y} = x + z$$
  - $$\dot{z} = x\, z + \alpha\, y^2$$
constants:
  - $$\alpha = 3$$
thumbnail: sprott-d-01.webp
images:
  - preview: sprott-d-01.webp
    full: sprott-d-01.png
---
Searching for the most simple systems that would behave chaotic around an attractor in 1994, Julien Clinton Sprott[^sprott] found 19 distinct cases from A through S which have at most 6 terms across three dimensions[^original-paper].
This is case D.


## Renders

{% include attractor_details.html %}

---
{: data-content="footnotes"}

[^sprott]: You can find his awesome suff in [Sprott's Gateway](https://sprott.physics.wisc.edu/)

[^original-paper]: J.C. Sprott, 1994. \"Some simple chaotic flows\". Phys. Rew. E. 50(2). [doi:10.1103/PhysRevE.50.R647](https://doi.org/10.1103/PhysRevE.50.R647).
