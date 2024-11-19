'use client'
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

const JPEventCalendar = () => {
    const styles = {
        navbar: {
            backgroundColor: '#fff',
            borderBottom: '1px solid #ddd',
            boxShadow: '0 1px 2px rgba(0, 0, 0, .1)',
            zIndex: 1000,
            height: '50px',
            paddingLeft: '20px',
            display: 'flex',
        },
        navbarIcon: {
            height: '50px',
        },
        navbarTitle: {
            fontSize: '20px',
            fontWeight: 600,
            lineHeight: '50px',
            marginLeft: '10px',
            height: '50px',
        },
        calendar: {
            maxWidth: '1200px',
            height: 'calc(100vh - 150px)',
            paddingTop: '50px',
            margin: '0 auto',
        },
        bottom: {
            width: '100%',
            marginTop: '10px',
            display: 'flex',
            textAlign: 'center' as const,
            justifyContent: 'center as const',
        },
        discord: {
            borderRadius: '10px',
            textDecoration: 'none',
            backgroundColor: '#7289da',
            border: '1px solid #7289da',
            color: '#fff',
            padding: '10px',
            fontWeight: 300,
            display: 'flex',
            flexDirection: 'column' as const,
            justifyContent: 'center' as const,
            alignItems: 'center' as const,
        },
    };

    return (
        <div>
            {/* Navbar */}
            <div style={styles.navbar}>
                <img style={styles.navbarIcon} src="/resource/favicon.png" alt="resonite.love" />
                <div style={styles.navbarTitle}>resonite.love</div>
            </div>

            {/* Calendar */}
            <div style={styles.calendar}>
                <FullCalendar
                    plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin]}
                    headerToolbar={{
                        left: 'prev,next',
                        center: 'title',
                        right: 'dayGridMonth,listMonth',
                    }}
                    initialView="listMonth"
                    locale="ja"
                    googleCalendarApiKey="AIzaSyA0JTlaEDKpEdGyLRFIE3dkQFwB7qRM0FI"
                    events={{
                        googleCalendarId:
                            'c_98fbac04f09d0eb6fe376a6fe34efc64e02a497e84a2f30bacbdb0019baa6dda@group.calendar.google.com',
                    }}
                />
            </div>

            {/* Footer */}
            <div style={styles.bottom}>
                <a
                    style={styles.discord}
                    href="https://discord.gg/z4XRHFZxCR"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    イベントを追加したいですか？<br />Discordに参加してください！
                </a>
            </div>
        </div>
    );
};

export default JPEventCalendar;
