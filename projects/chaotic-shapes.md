---
layout: post
title: CodingBobby | Shapes of Chaos
tags: [artwork, mathematics, differential systems, wallpaper]
---
When studying fluid dynamics and heat transfer I learned about chaos and the attractors.
My first encounter was with the Lorenz attractor, of course (read [this blog post](/blog/beautiful-chaos)).
The pure beauty of its unpredictable but organic shape hooked me from the first minute – I believe this feeling will stay with me forever.

So here is a small collection of rather simple but in a way artistic renderings of attractors I made for fun.
You can click on the images to open them in high resolution.

0. [Lorenz Attractor](#lorenz-attractor)
0. [Aizawa Attractor](#aizawa-attractor)
0. [Dequan-Li Attractor](#dequan-li-attractor)
0. [Nose-Hoover Attractor](#nose-hoover-attractor)
0. [Thomas Attractor](#thomas-attractor)


## Lorenz Attractor
Differential system:

$$\dot{x} = \alpha\, (y - x)$$

$$\dot{y} = x\, (\beta - z) - y$$

$$\dot{z} = x\, y - \gamma\, z$$

Constants:

$$\alpha = 10$$

$$\beta = 28$$

$$\gamma = 8/3$$

<a href="/assets/images/lorenz_attractor_wp.png" target="_blank">
   ![Lorenz Attractor](/assets/images/lorenz_attractor_wp_prev.webp){:loading='lazy'}
</a>

<a href="/projects/lorenz-attractor">
   ![Animated Lorenz Attractor](/assets/images/lorenz_attractor.gif){:width='60%'}
</a>

## Aizawa Attractor
Differential system:

$$\dot{x} = x\, (z - \alpha) - \dot{y}$$

$$\dot{y} = \beta\, x + y\, (z - \alpha)$$

$$\dot{z} = \gamma + \delta\, z - \frac{z^3}{3} - (1 + \varepsilon\, z)\, (x^2 + y^2) + \zeta\, z\, x^3$$

Constants:

$$\alpha = 0.7$$

$$\beta = 3.5$$

$$\gamma = 0.6$$

$$\delta = 0.95$$

$$\varepsilon = 0.25$$

$$\zeta = 0.1$$

<a href="/assets/images/aizawa_attractor_wp.png" target="_blank">
   ![Aizawa Attractor](/assets/images/aizawa_attractor_wp_prev.webp){:loading='lazy'}
</a>


## Dequan-Li Attractor
Differential system:

$$\dot{x} = \alpha\, (y - x) + \beta\, x\, z$$

$$\dot{y} = \gamma\, x + \delta\, y - x\, z$$

$$\dot{z} = \varepsilon\, z + x\, y - \zeta\, x^2$$

Constants:

$$\alpha = 40$$

$$\beta = 0.16$$

$$\gamma = 55$$

$$\delta = 20$$

$$\varepsilon = 1.833$$

$$\zeta = 0.65$$

<a href="/assets/images/dequan_li_attractor_wp.png" target="_blank">
   ![Dequan-Li Attractor](/assets/images/dequan_li_attractor_wp_prev.webp){:loading='lazy'}
</a>

## Nose-Hoover Attractor
Differential system:

$$\dot{x} = y$$

$$\dot{y} = -x + y\, z$$

$$\dot{z} = \alpha - y^2$$

Constants:

$$\alpha = 1.5$$

<a href="/assets/images/nose_hoover_attractor_wp.png" target="_blank">
   ![Nose-Hoover Attractor](/assets/images/nose_hoover_attractor_wp_prev.webp){:loading='lazy'}
</a>

<a href="/assets/images/nose_hoover_attractor_02_wp.png" target="_blank">
   ![Nose-Hoover Attractor](/assets/images/nose_hoover_attractor_02_wp_prev.webp){:loading='lazy'}
</a>

## Thomas Attractor
Differential system:

$$\dot{x} = \alpha\, x + \sin(y)$$

$$\dot{y} = -\alpha\, y + \sin(z)$$

$$\dot{z} = -\alpha\, z + \sin(x)$$

Constants:

$$\alpha = 0.19$$

<a href="/assets/images/thomas_attractor_wp.png" target="_blank">
   ![Thomas Attractor](/assets/images/thomas_attractor_wp_prev.webp){:loading='lazy'}
</a>