var path = location.pathname.substring(1); // strip the slash in the beginning
path = path.replace(/\/$/, ""); // strip the trailing slash if it exists

if ('calendar' === path) {
  // load the calendar javascript files
  $.getScript('/js/fullcalendar.min.js', function(data, textStatus) {
    console.log('fullcallendar.js: ' + textStatus);
    $.getScript('/js/gcal.js', function(data, textStatus) {
      console.log('gcal.js: ' + textStatus);
      $('#calendar').fullCalendar({
			  header: {
				  left: 'prev,next today',
				  center: 'title',
				  right: 'month,agendaWeek,agendaDay'
			  },
			  // HICapacity Public Calendar
			  events: 'http://www.google.com/calendar/feeds/hicapacity.org_vgo8qpscrk4hif3veoka112434%40group.calendar.google.com/public/basic',

			  eventClick: function(event) {
				  // opens events in a popup window
				  window.open(event.url, 'gcalevent', 'width=700,height=600');
				  return false;
			  },

			  loading: function(bool) {
				  if (bool) {
					  $('#loading').show();
				  }else{
					  $('#loading').hide();
				  }
			  }

		  });
    });
  });
}