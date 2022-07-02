import React from 'react';
import { Link } from 'react-router-dom';
const CompletedTasks = () => {

    return (
        <div>
            <h1>Completed Tasks</h1>

            <div className="flex justify-center">
                <Link to='/' className="btn btn-sm btn-outline btn-secondary m-6">Go To Hom</Link>
            </div>
        </div>
    );
};

export default CompletedTasks;