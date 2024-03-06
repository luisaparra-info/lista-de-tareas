import React from 'react';
import { Task } from '../models/TaskModel';
import TaskItem from '../components/Task/Task';

interface TaskListViewProps {
  tasks: Task[];
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

const TaskListView: React.FC<TaskListViewProps> = ({
  tasks,
  onToggleTask,
  onDeleteTask,
}) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={() => onToggleTask(task.id)}
          onDelete={() => onDeleteTask(task.id)}
        />
      ))}
    </div>
  );
};

export default TaskListView;
