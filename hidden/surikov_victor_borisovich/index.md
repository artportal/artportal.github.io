---
layout: page
title: Суриков Виктор Борисович
permalink: /surikov_victor_borisovich/
order: 3
hide: true
feature-img: "img/feature-img/zeyskaya_GES_1.jpg"
---
<div>
  <img src="/img/surikov_victor_borisovich/surikov_victor_borisovich.jpg"  style=" margin: 0 5px;" width="200px" height="252px" alt="surikov_victor_borisovich" align="left" vspace="5px" hspace="5px">
  
  <center><h3>Суриков Виктор Борисович (1940-1984).</h3>
  Амурский живописец, член союза художников России. Жил и работал на Дальнем Востоке. Главное место в своем творчестве уделял пейзажу, выполненному исключительно на пленэре в любое время года и в любую погоду.</center>
</div>
<br><br><br>
<div>
  {% assign gallery = site.data.surikov_victor_borisovich.surikov_victor_borisovich %}
  <center><h3>{{gallery.name}}</h3></center>
  <div class="fotorama" data-allowfullscreen="true" data-width="100%" data-ratio="800/600" data-nav="thumbs" data-arrows="true">
    {% for image in gallery.images %}
      <img src="/img/{{gallery.folder}}/{{image.name}}" data-caption="{{image.description}}">
    {% endfor %}
  </div>
</div>


 