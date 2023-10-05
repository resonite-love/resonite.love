document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: 'dayGridMonth,listMonth'
        },
        locale: 'ja',
        initialView: 'listMonth',
        googleCalendarApiKey: 'AIzaSyA0JTlaEDKpEdGyLRFIE3dkQFwB7qRM0FI',
        events:  'c_98fbac04f09d0eb6fe376a6fe34efc64e02a497e84a2f30bacbdb0019baa6dda@group.calendar.google.com',
    });
    calendar.render();
});