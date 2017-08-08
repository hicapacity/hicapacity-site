---
layout: default
title: HICapacity Events
permalink: /events/
type: main
description: Listing of all postings for events happening at HICapacity.
---
<div>
  {% for post in site.categories.event %}
    {% include post.html %}
  {% endfor %}  
</div>
