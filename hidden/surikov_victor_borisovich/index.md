---
layout: page
title: Суриков Виктор Борисович
permalink: /surikov_victor_borisovich/
order: 3
hide: true
feature-img: "img/feature-img/zeyskaya_GES_1.jpg"
---

<img src="/img/surikov_victor_borisovich/surikov_victor_borisovich.jpg" 
  align="left" width="476" height="600" alt="surikov_victor_borisovich">
  <strong>Суриков Виктор Борисович (1940-1985).</strong>
  {% assign gallery = surikov_victor_borisovich %}
  <h3>{{gallery.name}}</h3>
  <div class="fotorama" data-allowfullscreen="true" data-width="100%" data-ratio="800/600" data-nav="thumbs" data-arrows="true">
    {% for image in gallery.images %}
      <img src="/img/{{gallery.folder}}/{{image.name}}">  
    {% endfor %}
  </div>
 


 