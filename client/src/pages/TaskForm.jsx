/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskContext";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const params = useParams();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, [task]);

  return (
    <div className="pt-8 w-full">
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          
          if (params.id) {
            await updateTask(params.id, values);
          } else {
            await createTask(values);
          }
          actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className="bg-white shadow-2xl p-8 w-full md:max-w-[40%] flex flex-col gap-6 text-xl text-white font-medium rounded-md">
            <h1 className="text-3xl text-black font-medium">{params.id ? "Editar tarea" : "Crear tarea"}</h1>
            <div className="w-full flex flex-col gap-y-1">
              <label className="text-black" htmlFor="">Titulo</label>
              <input
                className="bg-gray-200 rounded-md pl-2 pb-2 text-gray-700 focus:outline-none"
                type="text"
                name="title"
                placeholder="Escribe una tarea"
                onChange={handleChange}
                value={values.title}
              />
            </div>

            <div className="w-full flex flex-col gap-y-1">

              <label className="text-black" htmlFor="">Descripcion</label>
              <textarea
                className="bg-gray-200 rounded-md pl-2 text-gray-700 focus:outline-none"
                name="description"
                rows="2"
                placeholder="Describe la tarea"
                onChange={handleChange}
                value={values.description}
              ></textarea>

            </div>

            <button type="submit" disabled={isSubmitting} className="bg-sky-600 hover:bg-sky-800 transition-all py-2 rounded-md">
              {isSubmitting ? "Guardando..." : "Guardar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
