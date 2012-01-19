function populateEvents() {
  var cal_id = 'hicapacity.org_vgo8qpscrk4hif3veoka112434%40group.calendar.google.com';
  var max_results = 5;
  var start_min = (new Date()).format('Y-m-d'); // today's date
  // var start_max = new Date();
  
  var url = 'http://www.google.com/calendar/feeds/' + cal_id + 
              '/public/full?alt=json&orderby=starttime&sortorder=ascending&max-results=' + max_results +
              '&start-min=' + start_min + '&singleevents=true&futureevents=true&showdeleted=false';
  $.getJSON(url, function(events) {
    
    var html = '<ul>';

    $.each(events.feed.entry,function(i,entry) {
      var date = (new Date(entry['gd$when'][0].startTime)).format("F j, Y");
      var startTime = (new Date(entry['gd$when'][0].startTime)).format("h:i A");
      var endTime = (new Date(entry['gd$when'][0].endTime)).format("h:i A");

      html += '<div class="eventTitle">';

      
      html += '<a href="' + entry.link[0].href + '">' + entry.title['$t'] + '</a>';
      html += '</div>';
      
      // event date, start time, and end time
      html += '<div class="dateTimeInfo">' + '<span class="timeLabel">Date: </span>' + date + '<br/>';
      //html += '<span class="timeLabel">Start: </span>' + startTime + '</br>' + '<span class="timeLabel">End: </span>' + endTime;
      html += '<span class="timeLabel">Time: </span>' + startTime + " - " + endTime;
      html += '</div>';        
    })
    html += '</ul>';
    
    // add to Google Calendar button
    html += '<div style="float: right; display: block; padding-top: 5px">';
    html += '<a href="http://www.google.com/calendar/render?cid=https%3A%2F%2Fwww.google.com%2Fcalendar%2Ffeeds%2Fhicapacity.org_vgo8qpscrk4hif3veoka112434%2540group.calendar.google.com%2Fpublic%2Fbasic"><img src="/img/calendar_plus_en.png"></a>';
    html += '</div>';
    html += '<div style="clear: both" />';

    $('#events').html(html);
  })
}
