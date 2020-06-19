import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private userList = []
  private sub: any;
  private users: any;
  constructor(private router : Router) { }

  ngOnInit() {
     this.userList = JSON.parse(localStorage.getItem('userDetails'));
console.log( this.userList)
  }
  addUser(){
     this.router.navigateByUrl('add-user')
  }
  EditUser(id){
    this.router.navigate(['/edit-user' , id ])
  }
  DeleteUser(id){
    
    let index = this.userList.findIndex(x => x.id == id)
    this.userList.splice(index, 1);
    localStorage.setItem('userDetails',  JSON.stringify(this.userList));
    alert('User Deleted Successfully')

  }
 
}
