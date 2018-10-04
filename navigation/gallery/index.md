---
layout: page
title: Фотогалерея
permalink: /gallery/
order: 6
---

<div class="gallery">
{% for gallery_hash in site.data.galleries %}
  {% assign gallery = gallery_hash[1] %}
  	<div class="gallery__item">
  		<div class="gallery__link">
  			<a href="/gallery/{{gallery.name}}/">{{gallery.title}}</a>
  		</div>
  		<a href="">
  			<img src="{{ site.baseurl }}/img/gallery/{{gallery.name}}/{{gallery.images[0].name}}" alt="">
  		</a>
  	</div>
  	
{% endfor %}
</div>

<!-- {% for gallery_hash in site.data.galleries %}
  {% assign gallery = gallery_hash[1] %}
  <h3>{{gallery.name}}</h3>
  <div class="fotorama" data-allowfullscreen="true" data-width="100%" data-ratio="800/600" data-nav="thumbs" data-arrows="true">
    {% for image in gallery.images %}
      <img src="{{ site.baseurl }}/img/{{gallery.folder}}/{{image.name}}">  
    {% endfor %}
  </div>
  ***
{% endfor %} -->