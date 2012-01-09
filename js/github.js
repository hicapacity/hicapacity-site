function populateProjects() {
  // The code below will select 10 repositories at random and display them
  // NOTE: There is no handling for less than 10 repositories right now

  var url = 'https://api.github.com/users/hicapacity/repos?callback=?';
  $.getJSON(url, function(json) {
    var repoCount = json.data.length;
    
    var html = '<ul>'
    
    var indiciesUsed = []; // keep track of indicies used
    
    // show 10 random repositories
    for (i = 0; i < 10; i++) {
      var randomIndex = randomToN(repoCount -1);
      
      // if random index is already in indicies used, keep randomizing until an unused one is found
      while ($.inArray(randomIndex, indiciesUsed) !== -1) {
        randomIndex = randomToN(repoCount - 1);
      }
      
      // find the repository at the randomly selected index
      var repo = json.data[randomIndex.toString()];
      
      if (i == 0 || i % 2 === 0) {
        html += '<li class="altRow">'
      }
      else {
        html += '<li>';
      }
      
      html += '<a href="' + repo.html_url + '">' + repo.name + '</li>'
      indiciesUsed.push(randomIndex); // keep track of used index
    }
    
    html += '</ul>'
    
    // add link to all HICAP on github
    html += '<a href="http://github.com/hicapacity">More Projects...</a>';
    
    $('#repos').html(html);
  })
}

function randomToN(maxVal)
{
  var randVal = Math.random()*maxVal;
  return Math.round(randVal);
}
