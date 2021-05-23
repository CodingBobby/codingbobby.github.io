---
layout: attractor
equations:
  - $$\dot{x} = \alpha\, (y - x)$$
  - $$\dot{y} = x\, (\beta - z) - y$$
  - $$\dot{z} = x\, y - \gamma\, z$$
constants:
  - $$\alpha = 10$$
  - $$\beta = 28$$
  - $$\gamma = 8/3$$
thumbnail: lorenz-01.webp
images:
  - preview: lorenz-01.webp
    full: lorenz-01.png
  - preview: lorenz-02.gif
    full: /projects/lorenz-attractor
    link: true
    width: 60%
---
{% include attractor_details.html %}
