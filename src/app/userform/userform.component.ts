import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  formData: object;
  IfSubmitted = false;

  constructor(private dataSer: DataService) { }
  
  ngOnInit(): void {
  }

  getFormData(data: any){
    this.formData = data.form.value;
    this.dataSer.postData(this.formData).subscribe({
      next: (value: any)=>{
        this.IfSubmitted = true;
        console.log(value);
      },
      error: (error: any)=>{
        console.log(error);
      }
    })
  }

}
