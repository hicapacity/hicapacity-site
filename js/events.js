function populateEvents() {
  var api_key = 'AIzaSyDR5Hb48TfsF-jfYy1UWgyd_ocSjSBW1B8';
  var cal_id = 'hicapacity.org_vgo8qpscrk4hif3veoka112434%40group.calendar.google.com';
  var max_results = 5;
  var start_min = ISODateString(new Date()); // today's date as RFC 3339
  // var start_max = new Date();
  
  var url = 'https://www.googleapis.com/calendar/v3/calendars/' + cal_id + 
              '/events?alt=json&orderBy=startTime&sortorder=ascending&maxResults=' + max_results +
              '&timeMin=' + start_min + '&singleEvents=true&futureevents=true&showDeleted=false&key=' + api_key;
  $.getJSON(url, function(json) {
    var html = '<ul>';

    $.each(json.items, function(i, entry) {
      console.log(entry);

      var visibility = entry.visibility;      
      if (visibility !== undefined ) {
        if (visibility === 'private') {
          return true; // this will go to the next iteration, acts like a continue statement          
        }
      }
      
      var date;
      var startTime;
      var endTime;
      
      if (entry.start.dateTime) {
        date = (new Date(entry.start.dateTime)).format("F j, Y");
        startTime = (new Date(entry.start.dateTime)).format("h:i A");
        endTime = (new Date(entry.end.dateTime)).format("h:i A");        
      }
      else {
        date = (new Date(entry.start.date)).format("F j, Y");
      }


      html += '<div class="eventTitle">';

      
      html += '<a href="' + entry.htmlLink + '">' + entry.summary + '</a>';
      html += '</div>';
      
      // event date, start time, and end time
      html += '<div class="dateTimeInfo">' + '<span class="timeLabel">Date: </span>' + date + '<br/>';
      //html += '<span class="timeLabel">Start: </span>' + startTime + '</br>' + '<span class="timeLabel">End: </span>' + endTime;
      
      if (startTime) {
        html += '<span class="timeLabel">Time: </span>' + startTime + " - " + endTime;        
      }
      else {
        html += '<span class="timeLabel">Time: </span> All Day'; 
      }

      html += '</div>';        
    })
    html += '</ul>';
    
    // add to Google Calendar button
    html += '<div class="calButton" style="float: right; display: block; padding-top: 5px">';
    html += '<a href="http://www.google.com/calendar/render?cid=https%3A%2F%2Fwww.google.com%2Fcalendar%2Ffeeds%2Fhicapacity.org_vgo8qpscrk4hif3veoka112434%2540group.calendar.google.com%2Fpublic%2Fbasic"><span class="glyphicon glyphicon-plus"></span> Add to Calendar</a>';
    html += '</div>';
    html += '<div style="clear: both" />';

    $('#events').html(html);
  })
}

function ISODateString(d){
 function pad(n){return n<10 ? '0'+n : n}
 return d.getUTCFullYear()+'-'
      + pad(d.getUTCMonth()+1)+'-'
      + pad(d.getUTCDate())+'T'
      + pad(d.getUTCHours())+':'
      + pad(d.getUTCMinutes())+':'
      + pad(d.getUTCSeconds())+'Z'}

