import { Component, OnInit } from '@angular/core';
import { User } from './user.ts';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  userList: user[]=[];

  addUser(frm) {
    console.log(frm.value);
  }
  constructor() {}

  ngOnInit() {}
}
