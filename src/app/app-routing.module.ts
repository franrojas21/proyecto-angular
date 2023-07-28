import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';

const routes: Routes = [
  {
    path: 'home', title: 'Stock-App | Home' , component: HomeComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch:'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration:'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
