import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() {
  }

  // Log the status of an activity
  logStatus = (activity: string, status: string | boolean) => {
    console.log(`The status of ${activity} is: ${status}`);
  }

  // Log a task, tasks, or any object
  logObject = (obj: {}[] | {}) => {
    console.log(`The object returned is: ${JSON.stringify(obj, null, 2)}`);
  }
}
