import { Task } from '../models/TaskModel';

let taskIdCounter: number = 0;

export class TaskController {
  private tasks: Task[] = [];

  public addTask(title: string): Task {
    const newTask: Task = {
      id: taskIdCounter++,
      title,
      completed: false,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  public toggleTask(id: number): void {
    this.tasks = this.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
  }

  public deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  public getAllTasks(): Task[] {
    return this.tasks;
  }
}
