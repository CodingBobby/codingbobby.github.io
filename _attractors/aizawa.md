---
layout: attractor
equations:
  - $$\dot{x} = x\, (z - \alpha) - \dot{y}$$
  - $$\dot{y} = \beta\, x + y\, (z - \alpha)$$
  - $$\dot{z} = \gamma + \delta\, z - \frac{z^3}{3} - (1 + \varepsilon\, z)\, (x^2 + y^2) + \zeta\, z\, x^3$$
constants:
  - $$\alpha = 0.7$$
  - $$\beta = 3.5$$
  - $$\gamma = 0.6$$
  - $$\delta = 0.95$$
  - $$\varepsilon = 0.25$$
  - $$\zeta = 0.1$$
thumbnail: aizawa-01.webp
images:
  - preview: aizawa-01.webp
    full: aizawa-01.png
---
{% include attractor_details.html %}
