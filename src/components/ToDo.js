import React from 'react';
import { useQuery } from 'react-query';
import { FiEdit2 } from 'react-icons/fi'
import { ImRadioUnchecked } from 'react-icons/im'

const ToDo = () => {
    const { data, isLoading, refetch } = useQuery('task', () => fetch('http://localhost:5000/task').then(res => res.json()));

    if (isLoading) {
        return <p>Loading</p>
    }
    return (
        <div className=''>
            <h1 className='text-3xl text-secondary font-bold text-center underline'>To-Do</h1>
            {
                data.map(({ task }, index) => <div key={index} refetch={refetch()} class="card w-96 bg-base-100 shadow-xl mx-auto m-3">
                    <div class="card-body">
                        <div class="card-actions justify-between">
                            <button className='btn btn-outline btn-secondary btn-xs'>
                                <ImRadioUnchecked />
                            </button>
                            <h1 className='text-2xl text-primary font-bold'>{task}</h1>
                            <button class="btn btn-outline btn-secondary btn-xs">
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