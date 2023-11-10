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
  }, []);

  return (
    <div>
      <h1>{params.id ? "Editar tarea" : "Crear tarea"}</h1>

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
          <Form onSubmit={handleSubmit}>
            <label htmlFor="">Titulo</label>
            <input
              type="text"
              name="title"
              placeholder="Escribe una tarea"
              onChange={handleChange}
              value={values.title}
            />

            <label htmlFor="">Descripcion</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Describe la tarea"
              onChange={handleChange}
              value={values.description}
            ></textarea>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Guardando..." : "Guardar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
