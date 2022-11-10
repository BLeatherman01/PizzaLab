import { Component } from '@angular/core';
import { MenuItem } from  '../menuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChirpusPizza';

  menu: MenuItem[] = [
    {item:"Pizza", category:"Dinner", price:11.99},
    {item:"Wings", category:"Sides", price:8.99},
    {item:"Bread", category:"Sides", price:4.99}
  ];


}