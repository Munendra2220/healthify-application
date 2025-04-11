import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public isOpened: boolean =  false;
  public sidebarShow: boolean = false;
  public getAllData: any = [];
  // public pushData: any = []
  constructor(public route: Router) {

  }

  ngOnInit(): void {
    this.getAllData = [{
      name:'parentCom', 'file': 'full'
    }]

  }
  
  pushData(ev:any) {
    console.log('from Child Com', ev)

  }

  addNewMember() {

  }

  redirectTomember() {
    this.route.navigate(['member']);
  }


 }
