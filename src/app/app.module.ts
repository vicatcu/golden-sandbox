import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GoldenLayoutModule, ComponentType } from 'ngx-golden-layout';
import * as $ from 'jquery';
import { MyWindow } from './my-window';
import { HomeComponent, FailComponent } from './home/home.component';

// It is required to have JQuery as global in the window object.
(window as MyWindow & typeof globalThis).$ = $;

// Define all component types known at compile time to the golden-layout binding.
// It's possible to modify these at runtime using the `ComponentRegistryService`
const componentTypes: ComponentType[] = [
  { type: FailComponent, name: 'fail-component' }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoldenLayoutModule.forRoot(componentTypes, FailComponent)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    FailComponent
  ]
})
export class AppModule { }
