---
title: Other Projects
featured-img: openneuroscience
author: amchagas
layout: page
categories: [Topic]
---


<section class="blog">
  <div class="container">
    <div class="post-list" itemscope="" itemtype="http://schema.org/Blog">

      {% for page in site.pages %}
        {% for category in page.categories %}
          {% if category == "Other" %}
            {% include card_page.html %}
          {% endif %}
        {% endfor %}
      {% endfor %}


    </div>
  </div>
</section>
