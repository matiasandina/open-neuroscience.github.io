---
title: Hardware
featured-img: openneuroscience
author: amchagas
layout: page
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
