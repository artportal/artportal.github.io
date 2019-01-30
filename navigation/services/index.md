---
layout: page
title: Товары для художников
permalink: /services/
order: 5
feature-img: "img/feature-img/zeyskaya_ges.jpg"
---
<p>Для Вашего удобства в студии можно приобрести материалы для занятий.</p>
<div class="catalog">
{% assign catalog =  site.data.catalog.catalog | sort: 'order' %}
{% for item in catalog  %}
	{% if item.hide != true %}
  	<div class="catalog__item">
  		<img class="catalog__image" src="{{ site.baseurl }}/img/catalog/{{ item.image }}" alt="{{ item.name }}" title="{{ item.name }}">
  		<div class="catalog__content">
	  		<div class="catalog__name">
	  			{{ item.name }}
	  		</div>
	  		<div class="catalog__text">
	  			{{ item.text }}
	  		</div>
	  		<div class="catalog__price">
	  			Цена: {{ item.price }}
	  		</div>
	  	</div>									
  	</div>
  	{% endif %}
{% endfor %}
</div>


