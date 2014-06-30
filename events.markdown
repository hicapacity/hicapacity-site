---
layout: default
title: HICapacity Events
permalink: /events/
type: main
---
<div>
  {% for post in site.categories.event %}
    {% include post.html %}
  {% endfor %}  
</div>
