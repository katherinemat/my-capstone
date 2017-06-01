import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SourcePipe } from './source.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    SidebarComponent,
    SourcePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
