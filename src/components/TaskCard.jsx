import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gradient-to-l from-slate-300 to-slate-100 border border-slate-300 grid grid-cols-2 justify-items-center justify-center items-center p-4 rounded-lg shadow-md">
      <h3 className="col-span-2 text-xl font-bold capitalize mb-2">{task.title}</h3>
      <p className="col-span-2 text-sm opacity-95 text-justify">{task.description}</p>
      <button
        className="block hover:brightness-110 hover:animate-pulse font-bold bg-gradient-to-r from-orange-200 to-red-500 text-gray-900 rounded-md col-span-2 w-60 px-3 py-2 mt-6"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;