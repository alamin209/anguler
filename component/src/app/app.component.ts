import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component';
  serverid : number =10;
   name   :  string="This is databinding example in Anguler string"

}
