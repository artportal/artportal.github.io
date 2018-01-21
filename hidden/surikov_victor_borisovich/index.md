---
layout: page
title: Суриков Виктор Борисович
permalink: /surikov_victor_borisovich/
order: 3
hide: true
feature-img: "img/feature-img/zeyskaya_ges_1.jpg"
---
<div style="text-align: center;">
  <img src="{{ site.baseurl }}/img/surikov_victor_borisovich/surikov_victor_borisovich.jpg"  style=" margin: 0 5px;" width="200px" height="252px" alt="Суриков Виктор Борисович" align="left" vspace="5px" hspace="5px">
  
  <h3>Суриков Виктор Борисович</h3>
  <p style="text-align: center;">
    Амурский живописец, член союза художников России. Жил и работал на Дальнем Востоке. Главное место в своем творчестве уделял пейзажу, выполненному исключительно на пленэре в любое время года и в любую погоду. Годы жизни 1940-1984.
  </p>
</div>
<div style="clear: both;"></div>
<div style="text-align: center;">
  {% assign gallery = site.data.surikov_victor_borisovich.surikov_victor_borisovich %}
  <h3>{{gallery.name}}</h3>
  <div class="fotorama" data-allowfullscreen="true" data-width="100%" data-ratio="800/600" data-nav="thumbs" data-arrows="true">
    {% for image in gallery.images %}
      <img src="{{ site.baseurl }}/img/{{gallery.folder}}/{{image.name}}" data-caption="{{image.description}}">
    {% endfor %}
  </div>
</div>


 