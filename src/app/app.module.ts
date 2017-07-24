import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SourcePipe } from './source.pipe';
import { MainComponent } from './main/main.component';
import { GraphsComponent } from './graphs/graphs.component';
import { ScatterplotComponent } from './scatterplot/scatterplot.component';
import { BarComponent } from './bar/bar.component';
import { SubjectAgeGroupComponent } from './subject-age-group/subject-age-group.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    SidebarComponent,
    SourcePipe,
    MainComponent,
    GraphsComponent,
    ScatterplotComponent,
    BarComponent,
    SubjectAgeGroupComponent,
    TableComponent
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
