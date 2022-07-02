import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import ToDo from './ToDo';
const Home = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const newTasks = data.task;
        fetch('https://metric-eh-88898.herokuapp.com/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ newTasks })
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    toast.success('Daily Task is add');
                    reset();
                }
            });
    };

    return (
        <div className=''>
            <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center  align-middle m-5'>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text"  {...register('task', { required: true })} placeholder="ADD DAILY TASKS" className="input input-bordered" required autoComplete='off' />
                        <button className="btn btn-outline btn-secondary">
                            <MdAddCircleOutline className='text-lg' />
                        </button>
                    </div>
                </div>
            </form>
            <ToDo></ToDo>
        </div>
    );
};

export default Home;