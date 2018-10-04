---
layout: page
title: На занятиях
permalink: /gallery/na-zanyatiyakh/
hide: true
---
<div class="gallery js-photoswipe-gallery -inner">
	{% assign gallery = site.data.galleries.na-zanyatiyakh %}
		{% for image in gallery.images %}
		  	<div class="gallery__item">
		  		<a href="{{ site.baseurl }}/img/{{page.permalink}}/{{image.name}}">
		  			<img src="{{ site.baseurl }}/img/{{page.permalink}}/{{image.name}}" alt="">
		  		</a>
		  	</div>
	{% endfor %}
</div>
