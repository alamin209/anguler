import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
// import { ProprtybindingComponent } from './proprtybinding/proprtybinding.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertybindingComponent,
    // 
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
