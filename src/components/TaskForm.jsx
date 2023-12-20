import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setDescription("");
    setTitle("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-l from-slate-300 to-slate-100 mb-10 p-5 grid gap-5"
      >
        <h1 className="text-2xl font-bold capitalize">Crea tu tarea</h1>
          <input
            type="text"
            placeholder="Nombre la tarea"
            maxLength={100}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            autoFocus
            className="w-full block rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
          />
          <textarea
            maxLength={150}
            placeholder="Ingresa una descripción de la tarea"
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            value={description}
            className="w-full block rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
          ></textarea>
        <button className="block hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-orange-200 to-red-500 text-gray-900">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
