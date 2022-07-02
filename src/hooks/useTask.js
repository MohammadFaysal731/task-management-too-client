import { useEffect, useState } from "react";

const useTask = () => {

    const [task, setTask] = useState([]);

    useEffect(() => {
        fetch('https://metric-eh-88898.herokuapp.com/task')
            .then(res => res.json())
            .then(data => {
                setTask(data);
            })
    }, []);

    return [task, setTask];
}

export default useTask; 