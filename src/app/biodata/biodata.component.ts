import { Component, OnInit } from '@angular/core';
import { bio, DataService } from '../data.service';

@Component({
  selector: 'app-biodata',
  templateUrl: './biodata.component.html',
  styleUrls: ['./biodata.component.css']
})
export class BiodataComponent implements OnInit {

  value: any;
  data: bio[] = [];
  displayedColumns = ['id', 'name', 'email', 'avatar']

  constructor(private dataSer: DataService) { }

  ngOnInit(): void {

    this.dataSer.getData().subscribe({
      next:(result:object)=>{
        this.value = result
       this.data = this.value.data
      },
      error: (error: any)=>{
        console.log(error);
      }
    })

  }
}
