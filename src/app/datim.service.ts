import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatimService {

  BASE_URL : string =  "http://172.16.110.141:5000/";

  constructor(
    private http: HttpClient
  ) { }

  getAllRecords():Observable<any>{
    return this.http.get(this.BASE_URL);
  }

}
