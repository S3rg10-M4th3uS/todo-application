import React from "react";
import './css/Task.css';
import {useNavigate} from "react-router-dom";

const Task = ({task}) => {
    let navigate = useNavigate();
    const updateTaskRoute = () =>{
        let path = "/updatetask";
        navigate(path, {state: {task: task}});
    }

    return (
        <div className="todo" key={task.id}>
            <div className="content">
                <p className="task-title" >{task.title}</p>
                <p className="task-description">{task.description}</p>
                <div className="task-status-button">
                    <p className="task-status">{convertEnumToString(task.taskStatus)}</p>
                    <button onClick={updateTaskRoute} className="viewDetailsBtn">Detalhes</button>
                </div>
            </div>
        </div>
    );
}

const convertEnumToString = (taskStatus) => {
    switch (taskStatus) {
        case "NOT_STARTED":
            return "Não Iniciado";
        case "IN_PROGRESS":
            return "Em Andamento";
        case "FINISHED":
            return "Concluído";
        default:
            return taskStatus;
    }
}

export default Task