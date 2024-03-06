import React, { useState } from 'react';
import { TaskController } from './controllers/TaskController';
import TaskListView from './views/TaskListView';
import './App.css';

const taskController = new TaskController();

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [tasks, setTasks] = useState(taskController.getAllTasks());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      taskController.addTask(inputValue);
      setTasks(taskController.getAllTasks());
      setInputValue('');
    }
  };

  const handleToggleTask = (id: number) => {
    taskController.toggleTask(id);
    setTasks(taskController.getAllTasks());
  };

  const handleDeleteTask = (id: number) => {
    taskController.deleteTask(id);
    setTasks(taskController.getAllTasks());
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Escribe una tarea..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>Añadir Tarea</button>
      </div>
      <TaskListView
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default App;
