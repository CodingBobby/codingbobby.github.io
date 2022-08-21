---
layout: attractor
equations:
  - $$\dot{x} = x - x\,y + c\,x^2 - a\,z\,x^2$$
  - $$\dot{y} = -y + x\,y$$
  - $$\dot{z} = -b\,z + a\,z\,x^2$$
constants:
  - $$a = 2.73$$
  - $$b = 2.94$$
  - $$c = 2.18$$
thumbnail: lotka-volterra-01.webp
images:
  - preview: lotka-volterra-01.jpg
    full: lotka-volterra-01.png
---

Decades before Edward N. Lorenz has discovered that differential equations can model a strange attractor[^lorenz-attractor], the chemist Alfred James Lotka[^lotka-book] and the physitian Vito Volterra have (independently) found an almost chaotic system.
They worked on the dynamics of predator-prey relationships and described a very simple model with two equations:

$$\dot{x} = \alpha\,x - \beta\,x\,y$$

$$\dot{y} = -\gamma\,y + \delta\,x\,y$$

Here, $$x$$ and $$y$$ represents the prey and predators, respectively.
The parameters $$\alpha$$, $$\beta$$, $$\gamma$$ and $$\delta$$ are measures for how prey and predators interact.

This set is very interesting on its own and intensive research has been done about it, but it does not yield chaos.
In fact, the solutions, although not simple, are periodic and it can be shown that only the relation $$\alpha/\gamma$$ does affect their behaviour.
You can explore the basic model in [this Geogebra simulation](https://ggbm.at/y746ry8g) by the Queensland professor Juan C.P. Campuzano.

However, if you expand the system with a third species, it evolves chaos.
This was found by the great trio A. Arnéodo, P. Coullet and C. Tresser who have done much more research and found their own [attractor](../arnéodo) before.[^original-paper]
Lotka and Volterra haven't expanded their equations with more species, so they didn't discover this on their own.


## Renders

{% include attractor_details.html %}

---
{: data-content="footnotes"}

[^lorenz-attractor]: Read more about the Lorenz attractor [here](../lorenz).

[^lotka-book]: A.J. Lotka, 1925. \"Elements of Physical Biology\". William and Wilkins Company. [Archived PDF](https://archive.org/details/elementsofphysic017171mbp).

[^original-paper]: A. Arnéodo, P. Coullet and C. Tresser, 1980. \"Occurence of strange attractors in three-dimensional Volterra equations\". Phys. Let. A. 79(4). [doi:10.1016/0375-9601(80)90342-4](https://doi.org/10.1016/0375-9601(80)90342-4).
