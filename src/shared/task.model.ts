// Define the Task interface
export interface TaskInterface {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

// Implement the Task interface with a class
export class Task implements TaskInterface {
  constructor(
    public id: string,
    public userId: string,
    public title: string,
    public summary: string,
    public dueDate: string
  ) {}
}

