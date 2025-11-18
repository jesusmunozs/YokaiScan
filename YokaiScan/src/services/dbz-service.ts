import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DbzService {


  url: string = "https://dragonball-api.com/api/";

  private http = inject(HttpClient);


  async obtenerPersonajes() {
    const request = await lastValueFrom(this.http.get<any>(this.url + "characters"));
    return request;
  }

  async obtenerPlanetas() {
    const request = await lastValueFrom(this.http.get<any>(this.url + "planets"));
    return request;
  }
  
}
