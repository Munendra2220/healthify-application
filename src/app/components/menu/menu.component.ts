import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  searchText: string = '';
  selectedPerson: any = null;
  sortColumn: any;
  sortAscending: boolean = true;

  people = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 28 },
    { id: 4, name: 'David', age: 35 }
  ];
// person: any;
  checkData: boolean = false;
  minuteCount: any = 0;
  secondCount: any = 0;
  filteredList() {
    let filtered = this.people.filter(person => 
      person.name.toLowerCase().includes(this.searchText.toLowerCase()) || person.id.toString().includes(this.searchText) ||
      person.age.toString().includes(this.searchText)
    );
    console.log('filtered', filtered)
    this.checkData = filtered.length > 0 ? false : true
    return filtered;
  }

  sortTable(column: string) {
    if (this.sortColumn === column) {
      this.sortAscending = !this.sortAscending;
    } else {
      this.sortColumn = column;
      this.sortAscending = true;
    }
  }

  selectRow(person: any) {
    this.selectedPerson = person;
  }

  stop() {
    this.secondCount = 0;
    this.minuteCount = 0;
    clearInterval(this.interval)
  }
  interval: any
  start() {
    this.interval = setInterval(() => {
      this.secondCount += 1;
      if(this.secondCount  >= 60) {
        clearInterval(this.interval)
        this.minuteCount += 1;
        this.secondCount = 0;
        this.start()
      }
    },1000)

   
  }
 
}

/**
 * feature of standalone component
 * 
 * Isolation
 * Reusability
 * Encapsulation
 * Minimal Dependencies
 * Clear Responsibilities
 * Independent
 * 
 * 
 * 
 * 
 * 
 * Interceptor
 * change detetion
 * cello copy and deep copy
 * 
 * 
 */
