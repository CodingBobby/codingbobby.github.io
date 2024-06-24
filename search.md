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
  </li>`,
  onInit: function() {
    // pre-populate search field if queried through url
    let params = (new URL(document.location)).searchParams
    let query = params.get('q')

    if (query != undefined) {
      let searchInput = document.getElementById('search-input')
      searchInput.value = query
      
      if (document.createEvent) {
        let event = document.createEvent("HTMLEvents")
        event.initEvent("input", true, true)
        searchInput.dispatchEvent(event)
      }
      // for those insane people that still use IE8 or lower(??)
      else {
        let event = document.createEventObject()
        event.eventType = 'input'
        searchInput.fireEvent('on' + event.eventType, event)
      }
    }
  }
})
</script>
