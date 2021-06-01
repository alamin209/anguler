import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators , FormsModule } from '@angular/forms';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})

export class PropertybindingComponent implements OnInit {

  allowNewbinding =false;
  eventname="";
  propertybinding ='No Event Was Created';
  servername ='dd d ddd';
  constructor() {

     setTimeout(()=>{
       this.allowNewbinding=true;
     },2000)

  }

  ngOnInit(): void {
  }

  onCreateEvent(){
    this.propertybinding="Now Event bindinG Work ";
  }

  onUpdateEvent( event:any){

     //if the target is input element then the eevent work
     this.eventname=event.target.value;
    //  console.log(event);

  }

}
