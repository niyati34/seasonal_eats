import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const SeasonalCalendar = ({ events }) => {
  const eventStyleGetter = (event) => {
    let style = {};
    if (event.isOutOfSeason) {
      style = {
        style: {
          backgroundColor: 'red', // Mark out-of-season events in red
          color: 'white',
        },
      };
    }
    return style;
  };

  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      eventPropGetter={eventStyleGetter}
      style={{ height: 500, margin: "50px" }}
    />
  );
};

export default SeasonalCalendar;
