import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Timicle } from '../types/Timicle';

@Injectable()
export class TimicleSercice {
  constructor(private http: HttpClient) {}
  getTimcleById(id: string) {
    return this.http.get<Timicle>(
      `http://timicle.azurewebsites.net//api/v1/timicle/${id}=`
    );
  }
}
