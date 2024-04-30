import { Component, OnInit } from '@angular/core';
import { HousingService } from '../services/housing.service';
import { IProperty } from './iProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit {
  properties: Array<IProperty>;
  constructor(private hosuingService:HousingService) { }

  ngOnInit(): void { 
    this.hosuingService.getAllProperties().subscribe
    (
      data => {
            this.properties = data;
            console.log(data);
          },error=>{
            console.log('httperror:');
            console.log(error);
          }
    )
    // this.http.get('data/properties.json').subscribe
    // (
    //   data=>{
    //     this.properties=data;
        
    //   }
    // );

}
}
