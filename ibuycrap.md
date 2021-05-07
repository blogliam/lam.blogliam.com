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
    <a href="/">LAMLOG</a>   
    
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

{% assign sum = post.price %}{% for post in site.categories.ibuycrap %}
    {% assign sum = post.price | plus: 11 %}
{% endfor %}
[Avg. Price Per Item: ${{ sum }}]     
<!--Not working, need to integrate division -->

{% assign sum = 0 %}{% for post in site.categories.ibuycrap %}
    {% assign sum = sum | plus: post.rating %}
{% endfor %}
[Avg. Video Rating: {{ sum }}/5]  
<!--Not working, need to integrate video tag and division -->

{% for post in site.categories.ibuycrap %}
    {% assign avgmuisc = sum | plus: post.rating %}
{% endfor %}
[Avg. Music Rating: {{ sum }}/5]  
<!--Not working, need to integrate music tag and division -->

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