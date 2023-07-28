import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Region } from '../model/Region';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private urlApi = 'https://api.shipit.cl/v/regions';

  constructor(private http: HttpClient) { }

  async getRegions(): Promise<Region[] | undefined> {
    
    return await this.http.get<Region[]>(this.urlApi).toPromise();
  }
  
}