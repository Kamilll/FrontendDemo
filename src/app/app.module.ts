import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SegmentsComponent } from './segments/segments.component';
import { SegmentDetailsComponent } from './segment-details/segment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SegmentsComponent,
    SegmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }