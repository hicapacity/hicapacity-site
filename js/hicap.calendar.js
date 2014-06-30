$(document).ready(function() {
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