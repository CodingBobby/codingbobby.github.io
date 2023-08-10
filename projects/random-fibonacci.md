---
layout: post
title: Random Fibonacci Numbers
---
Here, I calculated a sequence of random Fibonacci numbers to approximate Viswanath's constant $$e^{\gamma_f}$$.
Below is a Jupyter notbook I used for calculation and plotting.
I had time to compute over $$13.5$$ million numbers and found $$e^{\gamma_f}$$ within $$0.0084\,\%$$ error.
My final approximation was $$e^{\gamma_f} \approx 1.1320836316$$.
If you have $$1.6$$ GB free space on your disk you can <a href="https://drive.google.com/file/d/1W3eCH1YOC4AWPWgZknkkcW0GDbbXV0_h/view" target="_blank">download</a> the full list of my computed random Fibonacci numbers with additional information.

<script src="https://gist.github.com/CodingBobby/45bb2b9a5c44cd71b9cc0f7cf7b101b7.js"></script>

Here is the convergence plot in higher resolution:

![13.5 million random Fibonacci numbers](/assets/images/randomFib_13M.png)