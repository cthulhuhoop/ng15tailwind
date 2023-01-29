import { Injectable } from '@angular/core';
import { IUser } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getUsers() : IUser[] {
    return [{id:1, name: 'fred'},{id:2, name: 'barney'},{id:3, name: 'wilma'},{id:4, name: 'pebbles'}]
  }
}
