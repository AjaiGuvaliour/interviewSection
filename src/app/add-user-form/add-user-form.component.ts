import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, } from '@angular/router'


@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {
  name: string;



  private teams = [
    { id: 1, val: "SEO And Marketing" },
    { id: 2, val: "Developement" },
    { id: 3, val: "Design" },
    { id: 4, val: "Finance/HR" }
  ];
  private designations = [];
  private userArray = [];

  constructor(private router: Router) { }

  ngOnInit() {

    if (JSON.parse(localStorage.getItem('userDetails'))) {
      this.userArray = JSON.parse(localStorage.getItem('userDetails'))
    } else {
      this.userArray = []
    }



    // localStorage.setItem('userDetails', JSON.stringify(this.userArray));
  }
  onClickSubmit(data) {

    alert("User Added Succesfully");
    data['id'] = this.userArray.length + 1
    this.userArray.push(data)
    localStorage.setItem('userDetails', JSON.stringify(this.userArray));
    this.router.navigate(['user-list'])
  }
  firstDropDownChanged(val: any) {
    const obj = this.teams[val];
    console.log(val, obj);

    if (!obj) return;

    if (obj.id == 1) {
      this.designations = ["Language SEO", "Ads Assistance", "B2B Assistant"];
    }
    else if (obj.id == 2) {
      this.designations = ["Front End Developer", "Back End Developer"];
    }
    else if (obj.id == 3) {
      this.designations = ["Graphic designer"];
    }
    else {
      this.designations = ["Tax Assistant"];
    }
  }
}
