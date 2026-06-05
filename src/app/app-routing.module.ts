import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DamodarStotramComponent } from './pages/damodar-stotram/damodar-stotram.component';
import { MeaningComponent } from './pages/meaning/meaning.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'damodar-stotram', component: DamodarStotramComponent },
  { path: 'meaning', component: MeaningComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }