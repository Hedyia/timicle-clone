import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Timicle } from '../types/timicle';
@Injectable()
export class TimicleSercice {
  constructor(private http: HttpClient) {}
  getTimcleById(id: string) {
    return this.http.get<Timicle>(
      `https://localhost:5001/api/v1/timicle/${id}=`
    );
  }
}
