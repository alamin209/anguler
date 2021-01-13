import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulafrom';
  username ='';
  testname =false;


  test(){

     this.testname=true;

  }

}
