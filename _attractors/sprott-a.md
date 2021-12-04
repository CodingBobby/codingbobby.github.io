---
layout: attractor
equations:
  - $$\dot{x} = y$$
  - $$\dot{y} = - x + y\, z$$
  - $$\dot{z} = 1 - y^2$$
constants: false
thumbnail: sprott-a-02.webp
images:
  - preview: sprott-a-01.webp
    full: sprott-a-01.png
  - preview: sprott-a-02.webp
    full: sprott-a-02.png
---
Searching for (algebraically speaking) the most simple systems that would behave chaotic around an attractor in 1994, Julien Clinton Sprott[^sprott] found 19 distinct cases from A through S which have at most 6 terms across three dimensions[^original-paper].
They are occasionally called Sprott-Linz attractors because of the contributions by the German physicist Stefan Linz[^linz-one]<sup>,</sup>[^linz-two].
Case A contains just 5 terms and requires two of them to be nonlinear -- meaning the scaling factor of their variable is not constant.


## Renders

{% include attractor_details.html %}

![Sprott-A Animation](/assets/images/attractors/sprott-a.gif){:width='max-content'}

[Here](../sprott-d) you can find case D which I also rendered in this series.

---
{: data-content="footnotes"}

[^sprott]: You can find his awesome suff in [Sprott's Gateway](https://sprott.physics.wisc.edu/)

[^original-paper]: J.C. Sprott, 1994. \"Some simple chaotic flows\". Phys. Rev. E. 50(2). [doi:10.1103/PhysRevE.50.R647](https://doi.org/10.1103/PhysRevE.50.R647).

[^linz-one]: S.J. Linz, 1997. \"Nonlinear dynamical models and jerky motion\". Am. J. Phys. 65(6). [doi:10.1119/1.18594](https://doi.org/10.1119/1.18594).

[^linz-two]: S.J. Linz and J.C. Sprott, 1999. \"Elementary chaotic flow\". Phys. Let. A. 259(3–4). [doi:10.1016/S0375-9601(99)00450-8](https://doi.org/10.1016/S0375-9601(99)00450-8).
