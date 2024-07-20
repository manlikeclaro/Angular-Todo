import {Task} from './task.model';

export const DummyTasks: Task[] = [
  new Task('task-01', 'user-01', 'Master Angular', 'Learn all the basic and advanced features of Angular & how to apply them.', '2025-12-31'),
  new Task('task-02', 'user-03', 'Build first prototype', 'Build a first prototype of the online shop website', '2024-05-31'),
  new Task('task-03', 'user-03', 'Prepare issue template', 'Prepare and describe an issue template which will help with project management', '2024-06-15'),
  new Task('task-04', 'user-02', 'Design landing page', 'Create a design for the new product landing page.', '2024-07-20'),
  new Task('task-05', 'user-01', 'Implement authentication', 'Implement user authentication using JWT.', '2024-08-15'),
  new Task('task-06', 'user-04', 'Write unit tests', 'Write unit tests for the new features added to the project.', '2024-09-10'),
  new Task('task-07', 'user-05', 'Refactor codebase', 'Refactor the existing codebase for better readability and maintainability.', '2024-10-05'),
  new Task('task-08', 'user-02', 'Setup CI/CD pipeline', 'Set up a continuous integration and continuous deployment pipeline using GitHub Actions.', '2024-11-25'),
  new Task('task-09', 'user-04', 'Optimize performance', 'Optimize the application performance by identifying and fixing bottlenecks.', '2024-12-15'),
  new Task('task-10', 'user-03', 'Conduct user testing', 'Conduct user testing to gather feedback on the new features.', '2025-01-10'),
];
