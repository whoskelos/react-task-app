/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import {
  createTaskRequest,
  deleteTaskRequest,
  getTaskRequest,
  getTasksRequest,
  toggleTaskDoneRequest,
  updateTaskRequest,
} from "../api/tasks.api";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks debe estar dentro de un TaskContextProvider");
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    const response = await getTasksRequest();
    setTasks(response.data);
  }

  const deleteTask = async (id) => {
    try {
      await deleteTaskRequest(id);
      const newTasks = [...tasks].filter((task) => task.id !== id);
      setTasks(newTasks);
    } catch (error) {
      console.error(error);
    }
  };

  const createTask = async (task) => {
    try {
      const response = await createTaskRequest(task);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getTask = async (id) => {
    try {
      const response = await getTaskRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (id, newTask) => {
    try {
      const response = await updateTaskRequest(id, newTask);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleTaskDone = async (id) => {
    try {
      const taskFound = tasks.find((task) => task.id === id);
      await toggleTaskDoneRequest(id, taskFound.done === 0 ? true : false);
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, done: !task.done } : task
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        deleteTask,
        createTask,
        getTask,
        updateTask,
        toggleTaskDone,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
