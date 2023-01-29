import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AkjFishComponent } from './akj-fish/akj-fish.component';
import { AkjUserListComponent } from './akj-user-list/akj-user-list.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'user-list', component: AkjUserListComponent},
    {path: 'fish', component: AkjFishComponent},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }


