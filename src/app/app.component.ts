import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'healthify-application';
  public sidebarShow: boolean = false;
  constructor(public route: Router) {

  }

  ngOnInit() {
    this.getAllRecord();
  }

  getAllRecord() {
    console.log('testst');

  }

  
  addNewMember() {
    this.route.navigate(['member']);
    this.sidebarShow = false;
  }

  redirectHome() {
    // ev.stoppropagation();
    this.route.navigate(['home']);
    this.sidebarShow = false;
  }

  redirectMembers() {
    // ev.stoppropagation();
    this.route.navigate(['member-table']);
    this.sidebarShow = false;
  }

}
