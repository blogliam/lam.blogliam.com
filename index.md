---
layout: lamlog
title: Home
---

<p id="description">
    LAMLOG is the blog of multimedia artist Luke A. Makinson (signed as LAM). Here I document my media production, creative design, and general professional workflow.
</p>
<p id="description">
    My other blogs: <br>
    <a href="/ibuycrap/">ibuycrap</a> <br>
    <a href="/boardwalk/">boardwalk</a>
</p>
___

{% for post in site.categories.lamlog %}
<div class="lamlog">
    <p class="info">
        <a href="{{ post.url }}">
        LAMLOG #{{
            forloop.length |
            minus: forloop.index |
            plus: 1 |
            prepend: "000" |
            slice: -3, 3
        }} - {{ post.title }}
        </a>
    </p>
    <p class="info">{{ post.date | date: "%D" }} {{ post.time }}</p>

    {{ post.content }}
</div>
{% endfor %} 