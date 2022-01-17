import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react';


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
        {   id: 1,
            text: "Dr. Appointment",
            day: "Jan 5th at 4pm",
            reminder: true,
        },
        {   id: 2,
            text: "Oil Change",
            day: "Apr 25th at 1pm",
            reminder: true,
        },
        {   id: 3,
            text: "Concert",
            day: "Jul 29th at 8pm",
            reminder: false,
        }
    ]
)

// add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

// how is this working?
// shows tasks NOT selected by clicking delete?
// Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }


  // IF task is toggled 
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id === id ? { ...task, reminder: !task.reminder} : task))
  }

  return (

    <div className="container">
      <Header onAdd={()=> setShowAddTask(!showAddTask)}></Header>

      {showAddTask && <AddTask onAdd={addTask}></AddTask>}

      {/* if tasks arr has tasks, display them on the page ELSE display "there are no tasks to be displayed "*/}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks> : 'No tasks to show'}

    </div>
  );
}

export default App;
