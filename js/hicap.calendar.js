$(document).ready(function() {
  $('#calendar').fullCalendar({
      googleCalendarApiKey: 'AIzaSyDR5Hb48TfsF-jfYy1UWgyd_ocSjSBW1B8',
      events: {
          googleCalendarId: 'hicapacity.org_vgo8qpscrk4hif3veoka112434@group.calendar.google.com'
      },
      eventClick: function(event) {
        // opens events in a popup window
        window.open(event.url, 'gcalevent', 'width=700,height=600');
        return false;
      },
      loading: function(bool) {
        if (bool) {
          $('#loading').show();
        }
        else {
          $('#loading').hide();
        }
      },
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      }
  });
});