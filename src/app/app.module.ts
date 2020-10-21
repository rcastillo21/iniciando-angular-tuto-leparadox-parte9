import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/nested/nested/nested/nested/app/app.component';
import { NestedComponent } from './components/nested/nested/nested/nested/nested.component';

@NgModule({
  declarations: [
    AppComponent,
    NestedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
