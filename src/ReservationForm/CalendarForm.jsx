import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import { useReversation } from "../contexts/useReversation";

const CalendarFrom = () => {
    const [valueCalen, setValueCalen] = useState(new Date());
    const { setForm } = useReversation();  // To update the form state

    const onDateChange = (date) => {
        setValueCalen(date);
        setForm(prevForm => ({ ...prevForm, date: date.toISOString().split('T')[0] }));  // Store date in YYYY-MM-DD format
    };

    return (
        <div>
            <Calendar onChange={onDateChange} value={valueCalen} />
        </div>
    );
}
export default CalendarFrom;