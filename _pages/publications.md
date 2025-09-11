---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

Rick spearheads data operations with <a href="https://en.wikipedia.org/wiki/Neil_F._Johnson" target="_blank">Dr. Neil Johnson's</a> research group, <a href="https://donlab.columbian.gwu.edu/" target="_blank">the Dynamic Online Networks Lab</a>. He manages the team's massive social media database and its pipelines and works with many kinds of machine learning and NLP models to glean insights from this wealth of data at scale.

He is co-author on the following papers (all links are DOIs). You can also find these on his Google Scholar or ORCID.

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
