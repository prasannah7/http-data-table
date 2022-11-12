import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface bio {
  id:number,
  email: string,
  first_name:string,
  last_name:string,
  avatar: string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<object>("https://reqres.in/api/users");
  }

  postData(data: object){
    return this.http.post("https://reqres.in/api/users", data);
  }

}
