---
layout: blog
title: Jan Czizikow // Blog
description: Discover all the latest about tech, marketing and life in China, from perspective of an UX strategist and web developer.
permalink: "/blog/"
sitemap:
  priority:  0.8
---

<ul class="posts">
  {% for post in site.posts %}
    <li>
      <div class="post-outer">
        <div class="post-img-wrap">
        {% if post.featured-img %}
        <a href="{{ post.url }}">
            <span class="img-link">
              <picture>
                <source media="(min-width: 1200px)" srcset="/assets/img/posts/{{post.featured-img}}/{{post.featured-img}}-thumb_xl.jpg, /assets/img/posts/{{post.featured-img}}/{{post.featured-img}}-thumb_xl@2x.jpg 2x">
                <source media="(min-width: 992px)" srcset="/assets/img/posts/{{post.featured-img}}/{{post.featured-img}}-thumb_lg.jpg, /assets/img/posts/{{post.featured-img}}/{{post.featured-img}}-thumb_lg@2x.jpg 2x">
                <source media="(min-width: 768px)" srcset="/assets/img/posts/{{post.featured-img}}/{{post.featured-img}}-thumb_md.jpg, /assets/img/posts/{{post.featured-img}}/{{post.featured-img}}-thumb_md@2x.jpg 2x">
                <source media="(min-width: 576px)" srcset="/assets/img/posts/{{post.featured-img}}/{{post.featured-img}}-thumb_sm.jpg, /assets/img/posts/{{post.featured-img}}/{{post.featured-img}}-thumb_sm@2x.jpg 2x">
                <source media="(min-width: 0)" srcset="/assets/img/posts/{{post.featured-img}}/{{post.featured-img}}-thumb_xs.jpg, /assets/img/posts/{{post.featured-img}}/{{post.featured-img}}-thumb_xs@2x.jpg 2x">
                <img src="/assets/img/posts/{{post.featured-img}}/{{post.featured-img}}-thumb_lg@2x.jpg" alt="{{post.title}}">
              </picture>
            </span>
          </a>
        {% endif %}
        </div>
        <a class="" href="{{ post.url }}">
          <div class="post-inner">
            <div class="post-inner-contianer">
              <div class="post-inner-header">
                <h3 class="post-title">{{ post.title }}</h3>
                <time>{{ post.date | date_to_string }}</time>
              </div>
              <p>{{ post.content | strip_html | truncatewords:20 }}</p>
            </div>
          </div>
        </a>
      </div>
    </li>
  {% endfor %}
</ul>