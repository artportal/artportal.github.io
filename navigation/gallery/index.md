---
layout: page
title: Галерея
permalink: /gallery/
order: 6
feature-img: "img/feature-img/okraina_derevni_1968_60_80.jpg"
---

{% for gallery_hash in site.data.galleries %}
  {% assign gallery = gallery_hash[1] %}
  <h3>{{gallery.name}}</h3>
  <div class="fotorama" data-allowfullscreen="true" data-width="100%" data-ratio="800/600" data-nav="thumbs" data-arrows="true">
    {% for image in gallery.images %}
      <img src="/img/{{gallery.folder}}/{{image.name}}">  
    {% endfor %}
  </div>
  ***
{% endfor %}