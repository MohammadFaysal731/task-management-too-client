import React from 'react';
import { FiEdit2 } from 'react-icons/fi'
import useTask from '../hooks/useTask';
import { useNavigate } from "react-router-dom";


const ToDo = () => {
    const [task, setTask] = useTask();

    const navigate = useNavigate();

    const handleUpdate = id => {
        navigate(`/todo/${id}`);
    }

    return (
        <div className=''>
            <h1 className='text-3xl text-secondary font-bold text-center underline'>To-Do</h1>
            {
                task.map(({ _id, task }, index) => <div key={index} className="card w-96 bg-base-100 shadow-xl mx-auto m-3 ">
                    <div className="card-body">
                        <div className="card-actions justify-between">
                            <label htmlFor="">
                                <input type="radio" name="" id="" />
                            </label>
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