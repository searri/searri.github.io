---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

Rick works on research with <a href="https://en.wikipedia.org/wiki/Neil_F._Johnson" target="_blank">Dr. Neil Johnson's</a> research group, studying the many-body physics of online movements. He manages the team's massive social media database and its pipelines. He works with many kinds of machine learning and NLP models to glean insights from the team's wealth of data at scale.

He is co-author on the following papers (all links are DOIs). You can also find these on his Google Scholar or ORCID.

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
