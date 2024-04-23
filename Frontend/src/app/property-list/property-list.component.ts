import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {
  Property:Array <any>=[
    {
       "Id":1,
       "Name":"Birla House",
       "Type":"House",
       "Price":12000

    },
{
   "Id":2,
   "Name":"Erose villa",
   "Type":"House",
   "Price":13000

},
{
   "Id":3,
   "Name":"NacroHome",
   "Type":"House",
   "Price":15666
  }
  ,
  {
     "Id":4,
     "Name":"PerlHome",
     "Type":"House",
     "Price":15666
    }
    ,
    {
       "Id":3,
       "Name":"Perl White",
       "Type":"House",
       "Price":15666
      }
  ]
}
