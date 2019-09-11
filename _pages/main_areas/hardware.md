---
title: Hardware
featured-img: shane-rounce-205187
#date: 2013-01-29T19:12:19+00:00
author: amchagas
layout: page
#featured-img: shane-rounce-205187
categories: [Topic]
---

## sub categories in hardware

<section class="blog">
  <div class="container">
    <div class="post-list" itemscope="" itemtype="http://schema.org/Blog">
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
