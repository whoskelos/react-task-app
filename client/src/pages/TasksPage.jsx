/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskContext";
export default function TasksPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) {
      return <h1>No hay tareas creadas</h1>;
    }
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div>
      <h1 className="text-5xl font-bold tracking-wide text-center uppercase my-12">
        Tareas
      </h1>
      <div className="grid grid-cols-3 gap-4">{renderMain()}</div>
    </div>
  );
}
