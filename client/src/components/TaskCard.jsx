/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";


export default function TaskCard({ task }) {
    const { deleteTask } = useTasks()
    const navigate = useNavigate()
    return (
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <span>{task.done == 1 ? "✔️" : "❌"}</span>
            <p>{task.createAt}</p>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
            <button onClick={()=> navigate(`edit/${task.id}`)}>Editar</button>
        </div >
    )
}
