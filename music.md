---
layout: ibuycrap
title: music
permalink: /ibuycrap/music/
---

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

