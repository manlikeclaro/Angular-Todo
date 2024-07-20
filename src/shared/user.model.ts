export interface UserInterface {
  id: string;
  name: string;
  avatar: string;
}

export class User implements UserInterface {
  constructor(
    public id: string,
    public name: string,
    public avatar: string
  ) {}
}
