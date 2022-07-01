import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { BsCloudUpload } from 'react-icons/bs';
import { toast } from 'react-toastify';
const TaskUpdate = () => {
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams();

    const [updateTasks, setUpdateTasks] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/task/${id}`)
            .then(res => res.json())
            .then(data => {
                setUpdateTasks(data);
            })
    }, [id]);

    const onSubmit = data => {
        const updateTask = data.task;
        fetch(`http://localhost:5000/task/${updateTasks?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ updateTask })
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    toast.success('Task is Update');
                    setUpdateTasks(result);
                    reset();
                }
            })
    }

    return (
        <div>
            <h1 className='text-2xl text-center font-bold text-secondary m-3'>{updateTasks.task}</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center  align-middle m-5'>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text"  {...register('task', { required: true })} placeholder="UPDATE DAILY TASKS" className="input input-bordered" required autoComplete='off' />
                        <button className="btn btn-outline btn-secondary">
                            <BsCloudUpload className='text-lg' />
                        </button>
                    </div>
                </div>
            </form>
            <div className="flex justify-center">
                <Link to='/' className="btn btn-sm btn-outline btn-secondary">Go To Hom</Link>
            </div>
        </div>
    );
};

export default TaskUpdate;