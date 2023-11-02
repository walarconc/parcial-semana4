import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Planta} from "./planta";

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

  private apiUrl: string = '';
  constructor(private http: HttpClient) { }

  obtenerPlantas(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.apiUrl);
  }
}
