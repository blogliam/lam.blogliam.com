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
    <a href="https://lam.blogliam.com/">LAMLOG</a>   
    
    </p>
___
<br>
{% assign sum = 0 %}{% for post in site.categories.ibuycrap %}
    {% assign sum = sum | plus: post.price %}
{% endfor %}
[Total Money Wasted: ${{ sum }}]


{% for post in site.categories.ibuycrap %}
<div class="lamlog">
    <p class="info">
     {{ post.title }}
    </p>
    <p class="info"> Date: {{ post.date | date: "%D" }} | Price: {{ post.price }} | Format: {{ post.format }} </p>

    {{ post.content }}
</div>
{% endfor %}