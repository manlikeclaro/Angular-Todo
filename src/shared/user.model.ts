export interface User {
  id: string;
  name: string;
  avatar: string;
}

export class User implements User {
  constructor(public id: string, public name: string, public avatar: string) {
  }
}
