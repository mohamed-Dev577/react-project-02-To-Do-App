import { useState } from "react";

function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (indexToDelete) =>{
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div style={{padding: "20px"}}>

      <h1>To-Do App</h1>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="اكتب مهمة..."
      />

      <button onClick={addTask}>
        إضافة
      </button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => deleteTask(index)}>
              حذف
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;