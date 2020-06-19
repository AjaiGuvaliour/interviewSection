import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';



const routes: Routes = [
  { path: '', redirectTo: 'add-user', pathMatch: 'full'},
  { path: 'add-user', component: AddUserFormComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'edit-user/:id', component: EditUserComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
