---
layout: ibuycrap
title: video
permalink: /ibuycrap/video/
---

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

