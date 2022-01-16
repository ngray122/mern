import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';


function App() {
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

// how is this working?
// shows tasks NOT selected by clicking delete?
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  return (
    <div className="container">
      <Header></Header>
      <Tasks tasks={tasks} onDelete={deleteTask}></Tasks>
    </div>
  );
}

export default App;
