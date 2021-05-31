---
layout: attractor
equations:
  - $$\dot{x} = x\, (z - \beta) - \omega\, y$$
  - $$\dot{y} = y\, (z - \beta) + \omega\, x$$
  - $$\dot{z} = \lambda + \alpha\, z - \frac{z^3}{3} - (1 + \varrho\, z)\, (x^2 + y^2) + \varepsilon\, z\, x^3$$
constants:
  - $$\alpha = 0.95$$
  - $$\beta = 0.7$$
  - $$\lambda = 0.6$$
  - $$\omega = 3.5$$
  - $$\varrho = 0.25$$
  - $$\varepsilon = 0.1$$
thumbnail: aizawa-01.webp
images:
  - preview: aizawa-01.webp
    full: aizawa-01.png
  - preview: aizawa-02.webp
    full: aizawa-02.png
---
This attractor[^name] was found by William Finlay Langford in 1984.[^original-paper]
As the title of his paper suggests, the attractor is a bifurcation of a torus.
What does that mean?
Well, what he has done is taking a system of differential equations that resulted in a torus shape and simply added a bifurcation term to one of them.
Jokes aside, he has probably done a lot more work to get to that point but looking at the equations and tinkering with the parameters let you imagine just that.
Specifically, this term is $$\varepsilon\, z\, x^3$$ and it is added to $$\dot{z}$$.
If you leave it out by setting $$\varepsilon = 0$$, you get a spiraly donut shape[^canvas]:

![Attractor with eps=0](/assets/images/attractors/aizawa-z0.png){:width='40%'}

The inner tube is very thin here but when decreasing $$\alpha$$ to something like $$0.65$$, the shape becomes obvious:

![Attractor with eps=0 and alph=0.65](/assets/images/attractors/aizawa-z0-a065.png){:width='40%'}

Now when increasing the bifurcation parameter (and keeping the original value for $$\alpha$$), the chaos begins.
Here is it with $$\varepsilon = 0.001$$ and as you can see, this very slight change pushes the system out of symmetry:

![Attractor with eps=0.001](/assets/images/attractors/aizawa-z0001.png){:width='40%'}

## Renders

{% include attractor_details.html %}

---
{: data-content="footnotes"}

[^name]: Most online resources refer to this attractor as the "Aizawa Attractor" despite that Yoji Aizawa (it apparently got named after) seems to have nothing to do with it.[^aizawa] How this confusion arose is unclear.

[^aizawa]: This was pointed out by: E. Fleurantin, J.D. Mireles James, 2019. \"Resonant tori, transport barriers, and chaos in a vector field with a Neimark-Sacker bifurcation\". Department of Mathematics, Florida Atlantic University.

[^original-paper]: W.F. Langford, 1984. \"Numerical Studies of Torus Bifurcations\". In: T. Küpper, H.D. Mittelmann, H. Weber (eds), \"Numerical Methods for Bifurcation Problems\". International Series of Numerical Mathematics, Vol 70. [doi:10.1007/978-3-0348-6256-1_19](https://doi.org/10.1007/978-3-0348-6256-1_19).

[^canvas]: This and the other simple images were generated using Processing, similar to [this one](/projects/lorenz-attractor) I've done for the [Lorenz Attractor](/projects/chaotic-shapes/lorenz).