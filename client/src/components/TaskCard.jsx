/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import { toast } from "sonner"
export default function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  var options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div>
      <div className="w-72 h-80 mx-auto bg-gray-100 rounded-xl shadow-2xl flex flex-col">
        <div className="flex items-center p-3">
          <div className="px-1">
            <span className="w-4 h-4 rounded-full inline-block bg-red-500 cursor-pointer"></span>
          </div>
          <div className="px-1">
            <span className="w-4 h-4 rounded-full inline-block bg-yellow-400 cursor-pointer"></span>
          </div>
          <div className="px-1">
            <span className="w-4 h-4 rounded-full inline-block bg-green-500 cursor-pointer"></span>
          </div>
        </div>
        <div className="flex-grow flex flex-col gap-4 p-6 relative">
          <header className="flex justify-between">
            <h2 className="text-sm font-bold">{task.title}</h2>
            <span>{task.done == 1 ? "✔️" : "❌"}</span>
          </header>
          <p className="text-xs">{task.description}</p>
          <p>{new Date(task.createAt).toLocaleString("es-ES", options)}</p>
          <div className="w-full absolute left-0 bottom-0 pb-4 flex justify-center gap-x-2">
            <button
              className="bg-red-500 hover:bg-red-700 transition-colors px-2 py-1 text-white font-medium rounded-md"
              onClick={() => toast("Seguro que deseas eliminar la tarea?", {
                action: {
                  label: "Confirmar",
                  onClick: () => {
                    deleteTask(task.id)
                  }
                }
              })}
            >
              Eliminar
            </button>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 transition-colors px-2 py-1 text-white font-medium rounded-md"
              onClick={() => navigate(`edit/${task.id}`)}
            >
              Editar
            </button>
            <button
              className="bg-green-500 hover:bg-green-600 transition-colors px-2 py-1 text-white font-medium rounded-md"
              onClick={() => handleDone(task.done)}
            >
              Toogle task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
