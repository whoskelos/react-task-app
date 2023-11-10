/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

export default function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="bg-gray-100 rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{task.title}</h2>
        <span>{task.done == 1 ? "✔️" : "❌"}</span>
      </header>
      <p className="text-xs">{task.description}</p>
      <p>{task.createAt}</p>
      <div className="flex gap-x-2">
        <button
          className="bg-red-500 px-2 py-1 text-white font-medium rounded-md"
          onClick={() => deleteTask(task.id)}
        >
          Eliminar
        </button>
        <button
          className="bg-yellow-500 px-2 py-1 text-white font-medium rounded-md"
          onClick={() => navigate(`edit/${task.id}`)}
        >
          Editar
        </button>
        <button
          className="bg-green-500 px-2 py-1 text-white font-medium rounded-md"
          onClick={() => handleDone(task.done)}
        >
          Toogle task
        </button>
      </div>
    </div>
  );
}
