---
layout: ibuycrap
title: ibuycrap
permalink: /ibuycrap/
---

<p id="description">
    ibuycrap is a blog by Luke A. Makinson used to track his horendous spending habits and hopefully curb his physical media (and overall spending) addiction.
</p>

<p id="description">
    My other blogs: <br>
    <a href="/">LAMLOG</a>    <br>
    <a href="/boardwalk/">boardwalk</a>  

</p> 
___

<p id="description">
    Analytics: 
    
</p> 

<p id="description">
{% assign sum = 0 %}{% for post in site.categories.ibuycrap %}
    {% assign sum = sum | plus: post.price %}
{% endfor %}
[Total Money Wasted: ${{ sum }}]
<!--Working-->

{% assign sum = 0 %}{% for post in site.categories.ibuycrap %}
    {% assign sum = sum | plus: 1 %}
{% endfor %}
[Total Items: {{ sum }}]  
<!--Working-->

</p>

<br>

___

{% for post in site.categories.ibuycrap %}
<div class="lamlog">
    <p class="info">
     {{ post.title }}
    </p>
    <p class="info"> Date: {{ post.date | date: "%D" }} | Price: {{ post.price }} | Format: {{ post.format }} </p>

    {{ post.content }}
</div>
{% endfor %}