---
layout: ibuycrap
title: video
permalink: /ibuycrap/video/
---

<p id="description">
    Video Analytics:

</p> 

<p id="description">
{% assign sum = 0 %}
{% for post in site.tags.video %}
    {% assign sum = sum | plus: post.price %}
{% endfor %}
[Total Money Wasted: ${{ sum }}]
<!--Working-->
<br>
<br>
{% assign sum = 0 %}
{% for post in site.tags.video %}
    {% assign sum = sum | plus: 1 %}
{% endfor %}
[Total Items: {{ sum }}]  
<!--Working-->
<br>
{% assign sum = 0 %}
{% for post in site.tags.video %}
    {% if post.format == "VHS" %}
        {% assign sum = sum | plus: 1 %}
    {% endif %}
{% endfor %}
[Total VHS: {{ sum }}]  
<!--Working-->

{% assign sum = 0 %}
{% for post in site.tags.video %}
    {% if post.format == "bluray" %}
        {% assign sum = sum | plus: 1 %}
    {% endif %}
{% endfor %}
[Total BluRays: {{ sum }}]  
<!--Working-->

{% assign sum = 0 %}
{% for post in site.tags.video %}
    {% if post.format == "DVD" %}
        {% assign sum = sum | plus: 1 %}
    {% endif %}
{% endfor %}
[Total DVDs: {{ sum }}]  
<!--Working-->

<br>
<br>
{% assign sum = 0 %}
{% for post in site.tags.video %}
    {% assign sum = sum | plus: post.rating %}
{% endfor %}
[Avg. Video Rating: {{ sum | divided_by: site.tags.music.size | truncate: 4, "" }}/5]  

</p>

___

{% for post in site.categories.ibuycrap  %}
  {% if post.tags contains "video" %}
   <div class="lamlog">
    <p class="info">
     {{ post.title }}
    </p>
    <p class="info"> Date: {{ post.date | date: "%D" }} | Price: {{ post.price }} | Format: {{ post.format }} </p>

    {{ post.content }}
</div>
   {% endif %}
{% endfor %}

