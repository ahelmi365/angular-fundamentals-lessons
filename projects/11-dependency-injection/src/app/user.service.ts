import { data, User } from './data';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private userData: User[] = data;

  constructor() {}

  async getUserData(): Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log({ response });
    const users = await response.json();
    return users;
  }
}
