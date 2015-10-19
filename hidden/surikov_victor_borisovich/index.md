---
layout: page
title: Суриков Виктор Борисович
permalink: /surikov_victor_borisovich/
order: 3
hide: true
feature-img: "img/feature-img/zeyskaya_GES_1.jpg"
---
<div id="1" style="float: left; wigth=200px; height=260px" >
	<img src="/img/surikov_victor_borisovich/surikov_victor_borisovich.jpg"  style=" margin: 0 5px;" width="200px" height="252px" alt="surikov_victor_borisovich" float="left" vspace="5" hspace="5">
</div>	
<div id= "2" style="float: right; wigth=500px; height=260px" >
	<h3>Суриков Виктор Борисович (1940-1984).</h3>
	Амурский живописец, член союза художников России. Жил и работал на Дальнем Востоке. Главное место в своем творчестве уделял пейзажу, выполненному исключительно на пленэре в любое время года и в любую погоду.
</div>
<div id="3" style="clear: both">
  {% assign gallery = site.data.surikov_victor_borisovich.surikov_victor_borisovich %}
  <center><h3>{{gallery.name}}</h3></center>
  <div class="fotorama" data-allowfullscreen="true" data-width="100%" data-ratio="800/600" data-nav="thumbs" data-arrows="true">
    {% for image in gallery.images %}
      <img src="/img/{{gallery.folder}}/{{image.name}}" data-caption="{{image.description}}">
    {% endfor %}
  </div>
</div>


 