import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule }      from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// @NgModule({
//   imports:      [ FormsModule], //< added FormsModule here

// })

export class AppComponent {
  title = 'databinding';
  serverid : number =1;
  stringbinding :string ="This is String binding String interpolation ";
  biningexample ='';

  imports:      [ FormsModule]
  ////////////////calling the data with in method//////

  getstringbinding(){

    return  this.stringbinding;
  }
}
