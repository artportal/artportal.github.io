---
layout: page
title: Итоги мастер-класса «Пишем маслом»
permalink: /gallery/itogi-master-klassa-pishem-maslom/
hide: true
---
<div class="gallery js-photoswipe-gallery -inner">
  	{% assign gallery = site.data.galleries.itogi-master-klassa-pishem-maslom %}
  		{% for image in gallery.images %}
		  	<div class="gallery__item">
		  		<a href="{{ site.baseurl }}/img/{{page.permalink}}/{{image.name}}">
		  			<img src="{{ site.baseurl }}/img/{{page.permalink}}/{{image.name}}" alt="">
		  		</a>
		  	</div>
		{% endfor %}
</div>
