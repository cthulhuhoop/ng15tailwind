import { Injectable } from '@angular/core';
import { IUser } from './models/user.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getUsers(): IUser[] {
    return [
      { id: 1, name: 'fred', email: 'fred@bedrock.com', active: true, avatar: '' },
      { id: 2, name: 'barney', email: 'barney@bedrock.com', active: true, avatar: ''  },
      { id: 3, name: 'wilma', email: 'wilma@bedrock.com', active: true, avatar: ''  },
      { id: 4, name: 'pebbles' , email: 'pebbles@bedrock.com', active: true, avatar: '' },
    ];
  }
}
