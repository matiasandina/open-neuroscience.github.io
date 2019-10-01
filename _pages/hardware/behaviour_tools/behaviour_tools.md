---
title: Behaviour tools
author: amchagas
layout: page
categories: [Hardware]
featured-img: openneuroscience
---

<section class="blog">
  <div class="container">
    <div class="post-list" itemscope="" itemtype="http://schema.org/Blog">
      {% for page in site.pages %}
        {% for category in page.categories %}
          {% if category == "Behaviour" %}
            {% include card_page.html %}
          {% endif %}
        {% endfor %}
      {% endfor %}


    </div>
  </div>
</section>
