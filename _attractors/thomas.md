---
layout: attractor
equations:
  - $$\dot{x} = \sin(y) - b\, x$$
  - $$\dot{y} = \sin(z) - b\, y$$
  - $$\dot{z} = \sin(x) - b\, z$$
constants:
  - $$b = 0.19$$
thumbnail: thomas-01.webp
images:
  - preview: thomas-01.webp
    full: thomas-01.png
  - preview: thomas-02.webp
    full: thomas-02.png
---
Originally proposed by the biologist René Thomas (1928--2017), this set of differential equations is cyclically symmetric.[^original-paper]
The constant $$b $$ is a bifurcation parameter that describes how dissipative the system is.
Dissipation is a property from thermodynamics that can be thought of as a kind of dampening which is the result of a loss of energy, i.e. in form of heat.
Depending on the value of $$b $$, the attractor changes its shape.
Here is a list of what happens:

- $$b \ge 1$$: origin is a stable point
- $$1 > b \gtrsim 0.329$$: two stable points
- $$0.329 > b \gtrsim 0.208$$: two stable oscillations
- $$0.208 > b > 0$$: mostly chaos
- $$b = 0$$: no dissipation, brownian walk into infinity

There are several particularly interesting values for which more than just one attractor stabilise seperately:

- $$b = 0.22$$: two cycles
- $$b = 0.19$$: single cycle
- $$b = 0.17$$: three cycles
- $$b = 0.13$$: three cycles

## Renders

{% include attractor_details.html %}

---
{: data-content="footnotes"}

[^original-paper]: R. Thomas, 1999. \"Deterministic chaos seen in terms of feedback circuits: Analysis, synthesis, 'labyrinth chaos'\". Int. J. Bifurc. Chaos. 09(10). [doi:10.1142/s0218127499001383](https://doi.org/10.1142/s0218127499001383).
