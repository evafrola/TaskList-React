import TaskList from './components/TaskList'
import TaskForm from "./components/TaskForm";

function App() {

  return (
    <main className='bg-slate-800 h-screen'>
      <div className='container mx-auto p-7'>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )
}

export default App