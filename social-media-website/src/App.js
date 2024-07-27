import './App.css';
import { useState } from "react";
import { Task } from "./Task"

function App() {
  const [todoList, setTodoList] = new useState([]);
  const [newTask, setNewTask] = new useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      name: newTask,
      isCompleted: false,
    }
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const updateTask = (id) => {
    setTodoList(todoList.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  };

  return (
    <div className="App">
      <div className="inputSection">
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="taskList">
        {todoList.map((task) => {
          return (
            <Task 
              key={task.id}
              name={task.name}
              id={task.id} 
              isCompleted={task.isCompleted}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          );
        })}
      </div>
    </div>
  );
}



export default App;
