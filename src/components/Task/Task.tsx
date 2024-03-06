import React from 'react';
import { Task } from '../../models/TaskModel';

interface TaskItemProps {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={task.completed} onChange={onToggle} />
      <span className="task-title">{task.title}</span>
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
