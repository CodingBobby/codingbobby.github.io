---
layout: attractor
equations:
  - $$\dot{x} = -y - z$$
  - $$\dot{y} = x + a\, y$$
  - $$\dot{z} = b + z\, (x - c)$$
constants:
  - $$a = 0.2$$
  - $$b = 0.2$$
  - $$c = 5.7$$
thumbnail: roessler-01.webp
images:
  - preview: roessler-01.webp
    full: roessler-01.png
---
After the [Lorenz attractor](../lorenz) was found and intensively studied, the German biochemist Otto Eberhard Rössler simplified the model in 1976 and discovered a system that contains only one wing[^original-paper].

The resulting attractor has interesting topological properties as part of it is similar to a Möbius strip.


## Renders

{% include attractor_details.html %}

---
{: data-content="footnotes"}

[^original-paper]: O.E. Rössler, 1976. \"An equation for continuous chaos\". Phys. Let. A. 57(05). [doi:10.1016/0375-9601(76)90101-8](https://doi.org/10.1016/0375-9601(76)90101-8).
