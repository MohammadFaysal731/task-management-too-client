import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const Calendar = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className=''>
            <h1 className='text-2xl text-center text-secondary font-bold m-3'>Calendar</h1>
            <div className="flex justify-center align-middle">
                <DayPicker
                    className='border-4 border-secondary m-5 p-5 rounded-xl'
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                />
            </div>
        </div>
    );
};

export default Calendar;