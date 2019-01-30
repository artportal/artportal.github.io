---
layout: page
title: О нас
feature-text: Информация о студии
permalink: /about/
order: 1
feature-img: "img/feature-img/tishina.akademichka_1984_100_53_2.jpg"
---
<strong>Изостудия Арт Портал </strong> - это рисование для детей и взрослых. Студия открыта для всех, кто хочет научиться рисовать. Мы не проводим испытательных экзаменов и собеседований, главное от Вас – желание учиться. Возраст не имеет значения, научим всех. Набор в изостудию осуществляется в течении всего учебного года.
<h2  style="font-weight: bold;"><a href="{{ site.baseurl }}/programm/">Основные направления:</a></h2>
<ol>
  <li><a href="{{ site.baseurl }}/programm/index.html#lesson-for-adults">Занятия для взрослых;</a></li>
  <li><a href="{{ site.baseurl }}/programm/index.html#lesson-for-children">Занятия для детей (от трех лет);</a></li>
  <li><a href="{{ site.baseurl }}/programm/index.html#master-class">Мастер-классы;</a></li>
  <li><a href="{{ site.baseurl }}/art-therapy/">Арт-терапия;</a></li>
  <li><a href="{{ site.baseurl }}/programm/index.html#preparation-for-exams">Подготовка к поступлению в ВУЗ;</a></li>
  <li><a href="{{ site.baseurl }}/programm/index.html#school-of-design">Проект "Школа дизайна".</a></li>
</ol>
<h2 style="font-weight: bold;">Руководитель студии:</h2>
Сурикова Наталья Викторовна. Педагог высшей категории, дизайнер, член союза художников России.
<h2 style="font-weight: bold;">Преподаватели студии:</h2>
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
