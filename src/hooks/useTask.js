import { useEffect, useState } from "react";

const useTask = () => {

    const [task, setTask] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => {
                setTask(data);
            })
    }, []);

    return [task, setTask];
}

export default useTask; 