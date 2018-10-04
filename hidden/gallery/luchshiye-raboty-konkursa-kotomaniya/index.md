---
layout: page
title: Лучшие работы конкурса «Котомания»
permalink: /gallery/luchshiye-raboty-konkursa-kotomaniya/
hide: true
---
<div class="gallery js-photoswipe-gallery -inner">
  	{% assign gallery = site.data.galleries.luchshiye-raboty-konkursa-kotomaniya %}
  		{% for image in gallery.images %}
		  	<div class="gallery__item">
		  		<a href="{{ site.baseurl }}/img/{{page.permalink}}/{{image.name}}">
		  			<img src="{{ site.baseurl }}/img/{{page.permalink}}/{{image.name}}" alt="">
		  		</a>
		  	</div>
		{% endfor %}
</div>
