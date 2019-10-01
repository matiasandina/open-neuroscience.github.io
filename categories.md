---
layout: page
title: Categories
permalink: /categories/
---

<div>
{% for category in site.categories %}
  <div class="archive-group">
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <div id="#{{ category_name | slugize }}"></div>
    <p></p>
    <h3 class="category-head">{{ category_name }}</h3>
    <a name="{{ category_name | slugize }}"></a>
    {% for page in site.categories[category_name] %}
    <article class="archive-item">
      <h4><a href="{{ site.baseurl }}{{ page.url }}">{{page.title}}</a></h4>
    </article>
    {% endfor %}
  </div>
{% endfor %}
</div>
