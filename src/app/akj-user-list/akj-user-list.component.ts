import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { IUser } from '../models/user.model';

@Component({
  selector: 'app-akj-user-list',
  templateUrl: './akj-user-list.component.html',
  styleUrls: ['./akj-user-list.component.css']
})
export class AkjUserListComponent {

  constructor(
    private dataSrv: DataService
  ){

  }

  users : IUser[] = this.dataSrv.getUsers();

  // showConfig() {
  //   this.dataSrv.getUsers()
  //     .subscribe((data: IUser) => this.users = {
  //         heroesUrl: data.heroesUrl,
  //         textfile:  data.textfile,
  //         date: data.date,
  //     });
  // }
}
