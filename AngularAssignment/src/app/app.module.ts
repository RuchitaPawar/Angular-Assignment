import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingModule } from './app.routing';


import { AppComponent }  from './app.component';

import { MovementComponent } from './Movement';




@NgModule({
  imports:      [ BrowserModule ],
    declarations: [AppComponent,
                   MovementComponent
    ],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
