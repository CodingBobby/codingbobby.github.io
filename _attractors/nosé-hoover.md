---
layout: attractor
equations:
  - $$\dot{x} = y$$
  - $$\dot{y} = -x - y\, z$$
  - $$\dot{z} = y^2 - \alpha$$
constants:
  - $$\alpha = 1.5$$
thumbnail: nose-hoover-01.webp
images:
  - preview: nose-hoover-01.webp
    full: nose-hoover-01.png
  - preview: nose-hoover-02.webp
    full: nose-hoover-02.png
  - preview: nose-hoover-03.webp
    full: nose-hoover-03.png
---
This set of dynamical equations was found by Shūichi Nosé in 1984 when researching about molecular dynamics and thermal equilibrium distribution[^nose-paper]:

$$\dot{q} = \frac{p}{s^2}$$

$$\dot{p} = -q$$

$$\dot{s} = \zeta$$

$$\dot{\zeta} = \frac{p^2}{s^3} - \frac{T}{s}$$

Further research by William Graham Hoover[^hoover] a year later simplified them to[^hoover-paper]:

$$\dot{q} = p$$

$$\dot{p} = -q - \zeta\, p$$

$$\dot{\zeta} = p^2 - T$$

## Renders
With $$T = 1.5$$:

<p><a href="/assets/images/attractors/nose-hoover-01.png" target="_blank">
  <img src="/assets/images/attractors/nose-hoover-01.webp" loading="lazy" alt="Nosé-Hoover-1"/>
</a></p>

<p><a href="/assets/images/attractors/nose-hoover-02.png" target="_blank">
  <img src="/assets/images/attractors/nose-hoover-02.webp" loading="lazy" alt="Nosé-Hoover-2"/>
</a></p>

<p><a href="/assets/images/attractors/nose-hoover-03.png" target="_blank">
  <img src="/assets/images/attractors/nose-hoover-03.webp" loading="lazy" alt="Nosé-Hoover-3"/>
</a></p>

## Framing It
I liked the third render so much, that I printed it on 45x35 cm fine-art paper and framed it.
Read more in my [blog post](/blog/printing-digital-art).

![Printed Nosé-Hoover Attractor](/assets/images/attractors/nose-hoover-print.webp){:width='60%'}

---
{: data-content="footnotes"}

[^nose-paper]: S. Nosé, 1984. \"A unified formulation of the constant temperature molecular dynamics methods\". J. Chem. Phys. 81(1). [doi:10.1063/1.447334](https://doi.org/10.1063/1.447334).

[^hoover]: Professor Doctor Hoover has a great [homepage](https://www.williamhoover.info/) where you can find all of his research, books and lectures.

[^hoover-paper]: W.G. Hoover, 1985. \"Canonical dynamics: Equilibrium phase-space distribution\". Phys. Rev. A. 31(3). [doi:10.1103/PhysRevA.31.1695](https://doi.org/10.1103/PhysRevA.31.1695).
