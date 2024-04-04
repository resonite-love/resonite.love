document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: 'dayGridMonth,listMonth'
        },
        locale: 'ko',
        initialView: 'listMonth',
        googleCalendarApiKey: 'AIzaSyA0JTlaEDKpEdGyLRFIE3dkQFwB7qRM0FI',
        events:  'c_0c8c345f4339207e28ef5a2310c46f1f971150529b8d0675b0d5a9efa4d9aefb@group.calendar.google.com',
    });
    calendar.render();
});