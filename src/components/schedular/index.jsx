import React, { useState } from 'react'
import './style.css'
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const Schedular = () => {
    const[value,setValue]=useState(new Date());
  return (
    <div className='schedular-box'>
    <DateTimePicker  className='selected'  shouldCloseWidgets={false} isClockOpen={true} isCalendarOpen={true} minDate={new Date()} onChange={setValue} value={value} calendarIcon={null} />
    </div>
  )
}

export default Schedular