import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { DataServices } from 'src/app/services/data.service';

@Component({
  selector: 'app-member-table',
  templateUrl: './member-table.component.html',
  styleUrls: ['./member-table.component.css'],
  // on
})
export class MemberTableComponent implements OnInit  {
  public mamberData: any = []
  public isModalVisible: boolean = false;
  public singleUserDetails: any = [];
  public itemsPerPage = 3;  // Number of records per page
  public currentPage = 1;
  public paginatedData: any[] = [];
  public totalPages = 0;
  public searchTerm: string = '';
  public filteredData = [...this.mamberData];

  constructor(public route: Router, private dataService: DataServices) { 
    let data = this.dataService.usersList;
    console.log('data', data);
  };

  ngOnInit() {
    const storedData = sessionStorage.getItem('m_record');
  
    if (storedData) {
      this.mamberData = JSON.parse(storedData);
    } else {
      // this.mamberData = [];
    }
    this.filterRecords()
  }


  // ngAfterViewInit() {
  //   const searchTerm = fromEvent<any>(this.searchTerm,'').pipe(map(event => this.searchTerm))
  // }

  filterRecords() {
    this.filteredData = this.mamberData.filter((member:any) =>
      member.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      member.age.toString().includes(this.searchTerm) ||
      member.gender.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.mamberData.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    this.paginatedData = this.mamberData.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  // Previous Page
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  edit() {
    this.route.navigate(['member']);
  }


  deleterecord(ev:any, index: any) {
    // ev.preventdefault()
    if (confirm('Are you sure you want to delete this?')) {
      this.filteredData.splice(index, 1);
    }
  }

  openModal(data:any) {
    this.isModalVisible = true;
    this.singleUserDetails = [data];
  }

  closeModal() {
    this.isModalVisible = false;
  }


  AddNewEntry() {

  }

  getRealData() {
    const eventSource = new EventSource('http://localhost:4200/member-table');

    eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log('data', data)
    };

    eventSource.onerror = (error) => {
        console.error('EventSource failed:', error);
    };
  }
 

}
