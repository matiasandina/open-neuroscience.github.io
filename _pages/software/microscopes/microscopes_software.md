---
title: Microscopes software
author: amchagas
layout: page
categories: [Software]
featured-img: openneuroscience
---




<section class="blog">
  <div class="container">
    <div class="post-list" itemscope="" itemtype="http://schema.org/Blog">
      {% for page in site.pages %}
        {% for category in page.categories %}
          {% if category == "Microscopes software" %}
            {% include card_page.html %}
          {% endif %}
        {% endfor %}
      {% endfor %}


    </div>
  </div>
</section>
