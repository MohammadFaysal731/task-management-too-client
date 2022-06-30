import React from 'react';
import Calendar from './Calendar';
import CompletedTasks from './CompletedTasks';
import ToDo from './ToDo';

const Home = () => {
    return (
        <div>
            <CompletedTasks></CompletedTasks>
            <ToDo></ToDo>
            <Calendar></Calendar>
        </div>
    );
};

export default Home;