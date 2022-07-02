import React, { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi'
import useTask from '../hooks/useTask';
import { useNavigate } from "react-router-dom";


const ToDo = () => {
    const [task, setTask] = useTask();

    const navigate = useNavigate();

    const handleUpdate = id => {
        navigate(`/todo/${id}`);
    }

    const handleCompleteTask = (e) => {

        const complete = e.target?.complete?.value;
        console.log(complete)

        // fetch(`http://localhost:5000/complete`, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify({})
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     })

        // navigate(`/completedtasks`);

    }






    return (
        <div className=''>

            <h1 className='text-3xl text-secondary font-bold text-center underline'>To-Do</h1>
            {
                task.map(({ _id, task }, index) => <div key={index} className="card w-96 bg-base-100 shadow-xl mx-auto m-3 border">
                    <div className="card-body">
                        <div className="card-actions justify-between">
                            <input onClick={handleCompleteTask} type="radio" name="complete" class="" />
                            <h1 className='text-2xl text-primary font-bold'>{task}</h1>
                            <button onClick={() => handleUpdate(_id)}>
                                <FiEdit2 />
                            </button>
                        </div>
                    </div>
                </div>)
            }

        </div>


    );
};

export default ToDo;