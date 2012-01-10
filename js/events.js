function populateEvents() {
  var cal_id = 'hicapacity.org_vgo8qpscrk4hif3veoka112434%40group.calendar.google.com';
  var max_results = 5;
  var start_min = (new Date()).format('Y-m-d'); // today's date
  // var start_max = new Date();
  
  var url = 'http://www.google.com/calendar/feeds/' + cal_id + 
              '/public/full?alt=json&orderby=starttime&sortorder=ascending&max-results=' + max_results +
              '&start-min=' + start_min + '&singleevents=true&futureevents=true&showdeleted=false';
  $.getJSON(url, function(events) {
    
    var html = '<ul style="margin-bottom: 0px">';

    $.each(events.feed.entry,function(i,entry) {
      var date = (new Date(entry['gd$when'][0].startTime)).format("F j, Y");
      var startTime = (new Date(entry['gd$when'][0].startTime)).format("h:i A");
      var endTime = (new Date(entry['gd$when'][0].endTime)).format("h:i A");

      // event title
      if (i > 0) {
        // add some margin before the title block
        html += '<div class="eventTitle" style="margin-top: 5px">';        
      }
      else {
        html += '<div class="eventTitle">';  
      }
      
      html += '<a href="' + entry.link[0].href + '">' + entry.title['$t'] + '</a>';
      html += '</div>';
      
      // event date, start time, and end time
      html += '<div class="dateTimeInfo">' + date + '<br/>';
      html += '<span class="timeLabel">Starts: </span>' + startTime + '</br>' + '<span class="timeLabel">Ends: </span>' + endTime;
      html += '</div>';        
    })
    html += '</ul>';
    
    // add to Google Calendar button
    html += '<a href="http://www.google.com/calendar/render?cid=https%3A%2F%2Fwww.google.com%2Fcalendar%2Ffeeds%2Fhicapacity.org_vgo8qpscrk4hif3veoka112434%2540group.calendar.google.com%2Fpublic%2Fbasic" target="_blank"><img src="https://www.google.com/calendar/images/calendar_plus_en.gif" alt="0" border="0" style="padding: 2px 0px 0px 2px"></a>';

    $('#events').html(html);
  })
}