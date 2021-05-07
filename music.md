---
layout: ibuycrap
title: music
permalink: /ibuycrap/music/
---

<p id="description">
    Music Analytics: 
    
</p> 

<p id="description">
{% assign sum = 0 %}{% for post in site.tags.music %}
    {% assign sum = sum | plus: 1 %}
{% endfor %}
[Total Items: {{ sum }}]  
<!--Working-->

{% assign sum = 0 %}{% for post in site.tags.music %}
    {% assign sum = sum | plus: post.price %}
{% endfor %}
[Total Money Wasted: ${{ sum }}]
<!--Working-->

</p>
___


{% for post in site.categories.ibuycrap  %}
  {% if post.tags contains "music" %}
   <div class="lamlog">
    <p class="info">
     {{ post.title }}
    </p>
    <p class="info"> Date: {{ post.date | date: "%D" }} | Price: {{ post.price }} | Format: {{ post.format }} </p>

    {{ post.content }}
</div>
   {% endif %}
{% endfor %}

