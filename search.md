---
layout: post
title: Search
---
<style type="text/css" media="screen">
  #search-container {
    margin: 2em 0;
  }

  #search-input {
    margin: 0 20% 1em;
    width: -webkit-fill-available;
    width: -moz-available;
  }
</style>

<div id="search-container">
  <input type="text" id="search-input" placeholder="search...">
  <ul id="results-container"></ul>
</div>

<script src="/assets/search.js" type="text/javascript"></script>

<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  searchResultTemplate: `<li>
    <a href="{url}">
      {title}
    </a>
  </li>`
})
</script>
