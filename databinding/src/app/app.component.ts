import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding';
  serverid : number =1;
  stringbinding :string ="This is String binding String interpolation ";
  ////////////////calling the data with in method//////

  getstringbinding(){

    return  this.stringbinding;
  }
}
