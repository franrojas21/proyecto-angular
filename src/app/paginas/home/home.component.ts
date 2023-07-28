import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicio/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  constructor(
    private router:Router) {

   } 
  
  ngOnInit(): void {
  }
  
  goToPart(fragment:any) {
    this.router.navigateByUrl('home#'+fragment)
  }
  

}