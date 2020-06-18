import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id: number;
  private sub: any;
  private persons: any;
  private userArray = [];
  private teams = [
    { id: 1, val: "SEO And Marketing" },
    { id: 2, val: "Developement" },
    { id: 3, val: "Design" },
    { id: 4, val: "Finance/HR" }
  ];
  private designations = [];

  constructor( private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  
    this.userArray = JSON.parse(localStorage.getItem('userDetails'))
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

   });
   this.persons =   this.userArray.find(x => x.id == this.id);
   var selectedOptionIndex = this.teams.findIndex(x => x.val == this.persons.team)
   this.firstDropDownChanged(selectedOptionIndex)
  }
 firstDropDownChanged(val: any) {
   
  const obj = this.teams[val];

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
onClickSubmit(data) {
  
  alert("user Updated Successfully"); 
  data['id'] =  this.id
  const index = this.userArray.findIndex((e) => e.id === this.id);
  this.userArray[index] = data;  
  localStorage.setItem('userDetails',  JSON.stringify(this.userArray));
   this.router.navigate(['user-list'])
}
cancelEdit(){
  this.router.navigate(['user-list'])

}
}
