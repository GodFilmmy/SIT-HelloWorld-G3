import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

const CalendarFrom = () => {
    const [valueCalen,setValueCalen] = useState(new Date());
    return(
        
            <div>
                <Calendar onChange={setValueCalen} value={valueCalen}></Calendar>
            </div>
        
    )
}
export default CalendarFrom;