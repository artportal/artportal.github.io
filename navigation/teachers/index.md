---
layout: page
title: Преподаватели
permalink: /teachers/
order: 4
feature-img: "img/feature-img/zeyskaya_ges_1.jpg"
hide: true
---

<div class="teachers">
    <div class="teachers-wrap">   
        {% assign teachers = site.data.teachers  %}        
        {% for teacher_hash in teachers %}            
            {% assign teacher = teacher_hash[1] %}
            {% if teacher.hide != true %}
                <div class="teachers__item">
                    <div class="teachers__images">
                        <img src="{{ site.baseurl }}/img/teachers/{{teacher.avatar}}" alt="{{teacher.name}}" title="{{teacher.name}}">
                    </div>
                    <div class="teachers__content">
                        <div class="teachers__name">
                            {{teacher.name}}
                        </div>
                        <div class="teachers__text">
                            {{teacher.text}}
                        </div>
                        <div class="teachers__link">
                            <a href="{{ site.baseurl }}/teachers-gallery/{{teacher.link}}" target="_blank">Ознакомиться с работами преподавателя</a>
                        </div>
                    </div>
                    
                </div>
            {% endif %}
        {% endfor %}
    </div>
</div>
