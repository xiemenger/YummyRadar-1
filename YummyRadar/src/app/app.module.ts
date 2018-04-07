import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { AnalysisAreaComponent } from './components/analysis-area/analysis-area.component';
import { AnalysisTypeComponent } from './components/analysis-type/analysis-type.component';
import { SearchingComponent } from './components/searching/searching.component';
import { routing } from './app.router';

import {MatToolbarModule, 
  MatInputModule, 
  MatMenuModule, 
  MatIconModule, 
  MatButtonModule, 
  MatCardModule, 
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatTooltipModule,
  MatDialogModule
  } from '@angular/material';
import { AnalysisService } from './Services/analysis.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AnalysisLocationComponent } from './components/analysis-location/analysis-location.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchingComponent,
    NavBarComponent,
    // AnalysisAreaComponent,
    AnalysisTypeComponent,
    AppComponent,
    SearchingComponent,
    AnalysisLocationComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [AnalysisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
