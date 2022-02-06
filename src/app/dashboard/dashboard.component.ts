import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  hospitalName!: string;
  filteredRecords: any;
  startDate!: string;
  endDate!: string;

  filtering: boolean = false;

  records = [
    {
      hospital_id: 1,
      hospitalName: "Maseno Mission",
      newBornNumber: 10,
      deathNumber: 2,
      numberOfPatientsServed: 100,
      coronaCases: 1,
      date: "2022-02-06"
    },
    {
      hospital_id: 2,
      hospitalName: "Luanda Mission",
      newBornNumber: 8,
      deathNumber: 0,
      numberOfPatientsServed: 110,
      coronaCases: 1,
      date: "2022-02-06"
    },
    {
      hospital_id: 3,
      hospitalName: "Kitui General",
      newBornNumber: 20,
      deathNumber: 0,
      numberOfPatientsServed: 200,
      coronaCases: 2,
      date: "2022-03-06"
    }
  ]

  constructor() { }


  filterByHospitalName() {


    console.log(this.hospitalName);

    if (this.hospitalName.length > 0) {
      this.filtering = true;
      this.filteredRecords = this.records.filter((record: any) => {
        return record.hospitalName.toUpperCase().includes(this.hospitalName.toUpperCase())
      });

      console.log(this.filteredRecords);
    } else {
      this.filtering = false;
    }

  }

  filterByDate() {

    console.log(this.startDate);
    console.log(this.endDate);


    // check if start date is not available
    if (!Boolean(this.startDate)) {
      if (!Boolean(this.endDate)) {
        this.filtering = false;
        return;
      }
    }

    // check if end date is not available
    if (!Boolean(this.endDate)) {
      if (!Boolean(this.startDate)) {
        this.filtering = false;
        return;
      }
    }

    if (this.filtering) {
      // means that we have something already, from the name
      console.log("We have sth in filtered list already")

    } else {
      console.log("We don't have a filter yet, first time this!")
      this.filtering = true;
    }

    // where we have the start date alone
    if (this.startDate != undefined && this.endDate == undefined) {
      const startDateAsDate = new Date(this.startDate);

      this.filteredRecords = this.records.filter((record) => {
        const date = new Date(record.date);
        return date >= startDateAsDate;
      });

      return;
    }

    // where we have end date alone
    if (this.startDate == undefined && this.endDate != undefined) {
      const endDateAsDate = new Date(this.endDate);

      this.filteredRecords = this.records.filter((record) => {
        const date = new Date(record.date);
        return date <= endDateAsDate;
      });

      return;
    }

    // where we have both
    if (this.startDate != undefined && this.endDate != undefined) {

      const startDateAsDate = new Date(this.startDate);
      const endDateAsDate = new Date(this.endDate);

      this.filteredRecords = this.records.filter((record) => {
        const date = new Date(record.date);
        return date >= startDateAsDate && date <= endDateAsDate;
      });

      return;
    }

  }

  ngOnInit(): void {
  }

}
