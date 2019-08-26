---
title: Hardware
featured-img: shane-rounce-205187
#date: 2013-01-29T19:12:19+00:00
author: amchagas
layout: page
#featured-img: shane-rounce-205187
#categories: [Sample, Guides]
---
<!--
<section class="blog">
  <div class="container">
    <div class="post-list" itemscope="" itemtype="http://schema.org/Blog">

      {% for page in site.pages %}
      {% for category in pages.categories %}
      {% if category == "Hardware" %}
        {% include card.html %}
      {% endif %}
      {% endfor %}
      {% endfor %}


    </div>
  </div>
</section>
-->

<section class="blog">
  <div class="container">
    <div class="page-list" itemscope="" itemtype="http://schema.org/Blog">

      {% for page in site.pages %}
      {% for category in page.categories %}
      {% if category == "Hardware" %}
        {% include card_page.html %}
      {% endif %}
      {% endfor %}
      {% endfor %}


    </div>
  </div>
</section>



&nbsp;

Here you will find information about existing open hardware platforms, which can be used for several different tasks.

&nbsp;

There are projects such as the [Arduino](http://www.arduino.cc/), or the [SimpleCortex](http://www.brc-electronics.nl/), which are microcontrollers that can be loaded with different programs to control different sensors and devices.

&nbsp;

Other projects that aim to offer a cheap alternative for desktops, while doing more than desktops&#8230; Good examples in this category are the [Beagle board](http://beagleboard.org/#&slider1=1) and the [Raspberry pi](http://www.raspberrypi.org/) (although the latter is not completely open).

&nbsp;

On the wetware class, we have open PCR, and centrifuges available

&nbsp;

Last but not least, there are also complete electrophysiology systems available. In this category are the [Backyard brains](https://backyardbrains.com/) and the [Open ephys](http://open-ephys.org/) initiative.

&nbsp;
