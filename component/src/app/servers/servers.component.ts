import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // templateUrl: './servers.component.html',
  // can do another way of template link 
  template:'<app-server></app-server><app-servers></app-servers>',
  styleUrls: ['./servers.component.css']
}) 
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
