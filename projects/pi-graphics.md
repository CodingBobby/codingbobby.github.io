---
layout: post
title: Pi Graphics
---
These are some images I have created to visualise the first few of the infinitely many digits of $$\pi$$.

{% assign images_url = page.baseurl | append:'/assets/images/pi/' %}

{% for file in site.static_files %}
  {% if file.path contains images_url %}
![]({{ file.path }})
  {% endif %}
{% endfor %}
