import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {

  const {tasks} = useContext(TaskContext)


    if (tasks.length === 0) {
        return <h1 className="text-5xl text-white font-bold text-center">No hay tareas aún</h1>
    }

  return (
    <div className="grid grid-cols-3 max-[640px]:grid-cols-1 gap-5">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;