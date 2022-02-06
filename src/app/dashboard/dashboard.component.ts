import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  hospitalName!: string;
  filteredRecords: any;

  filtering: boolean = false;

  records = [
    {
      hospitalId: 1,
      hospitalName: "Maseno Mission",
      newBornNumber: 10,
      deathNumber: 2,
      numberOfPatientsServed: 100,
      coronaCases: 1,
      date: "2022-02-06"
    },
    {
      hospitalId: 2,
      hospitalName: "Luanda Mission",
      newBornNumber: 8,
      deathNumber: 0,
      numberOfPatientsServed: 110,
      coronaCases: 1,
      date: "2022-02-06"
    },
    {
      hospitalId: 3,
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
    }else{
      this.filtering = false;
    }

  }

  ngOnInit(): void {
  }

}
