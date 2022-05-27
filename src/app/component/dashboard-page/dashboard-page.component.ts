import { Component, OnInit } from '@angular/core';
import skills from '../../../assets/JSON/skills.json';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  skillsetdata : any[]=[];
  constructor() { }

  ngOnInit(): void {
    let ObjSkills = ({} = skills);
    console.log(ObjSkills.skillSet);
    this.skillsetdata = ObjSkills.skillSet;
    console.log(this.skillsetdata);
  }

}
