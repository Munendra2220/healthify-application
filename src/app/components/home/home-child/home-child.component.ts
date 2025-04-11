import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.css']
})
export class HomeChildComponent implements OnInit {

  @Input() getData: any;
  // public pushData: any = [];
  @Output() pushData = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {
      console.log('child Com', this.getData);
      var newData = [{name:'updated', file: 'from childCom'}]
      this.pushData.emit(newData);
  }
}
