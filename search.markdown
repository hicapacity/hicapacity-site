---
layout: static
title: Search Results
permalink: /search/
---
<script type="text/javascript">
  $(function() {
    var query = $.getUrlVar('q');
    query = query.replace(/\+/g,  " ");
    $('#terms').append('<strong>' + decodeURIComponent(query) + '</strong>');
  });
</script>
<script>
  $.extend({
    getUrlVars: function(){
      var vars = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      for(var i = 0; i < hashes.length; i++)
      {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
      }
      return vars;
    },
    getUrlVar: function(name){
      return $.getUrlVars()[name];
    }
  });
</script>
<script type="text/javascript">
  // call with no event, function will check
  load_more_results();

function load_more_results(event) {
  var index = event === undefined ? 1 : event.data['next_index'];
  var key = 'AIzaSyDR5Hb48TfsF-jfYy1UWgyd_ocSjSBW1B8';
$.getJSON('https://www.googleapis.com/customsearch/v1?key=' + key + '&cx=009343809998409014662:_aie3owxk94&q=' + $.getUrlVar('q') + '&start=' + index + '&callback=?', function(json) {

      // Remove the more div
      $('#more').remove();
      
      if (json.items !== undefined) {
        $.each(json.items, function(i,item) {
          var html = '<div style="padding-bottom: 10px;">';
          html += '<a href="' + item.link + '" style="font-weight: normal; font-style: normal;">' + item.htmlTitle + '</a><br/>';
          html += item.htmlSnippet.replace(/<br[^>]*>/gi, '');
          html += '</div>';
          $('#results').append(html);
        });
      }
      
      // Add the the more div if there are more results that aren't shown
      if (json.queries !== undefined && json.queries.nextPage !== undefined) {
        $('#results').append('<div id="more" style="cursor: pointer"></div>');
        $('#more').on('click', {next_index: json.queries.nextPage[0].startIndex}, load_more_results);
      }
    });
}
</script>

<div id="terms">Showing results for: </div>
<div id="results"></div>