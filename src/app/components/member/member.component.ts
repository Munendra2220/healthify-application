import { Component } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  user = {
    name: '',
    email: '',
    age: null,
    gender: null,
    HCondition: '',
    MDetails: '',
    doctorName: '',
    DoctorContactNumber: '',
    EmergencyContact: '',
    selectedDate:''
  };

  constructor() {}

  addMember() {
  }
  
  Save() {
    const storedData = sessionStorage.getItem('m_record');
    const data: any = storedData ? JSON.parse(storedData) : [];
    data.push(this.user);
    sessionStorage.setItem('m_record', JSON.stringify(data));
    this.user = {
      name: '',
      email: '',
      age: null,
      gender: null,
      HCondition: '',
      MDetails: '',
      doctorName: '',
      DoctorContactNumber: '',
      EmergencyContact: '',
      selectedDate: ''
    };
  }

  selectDate(ev:any) {
    console.log('date', ev)
  }
  
  public parentDiv: any = document.getElementById('parent')
  public childDiv: any = document.getElementById('child')


}
