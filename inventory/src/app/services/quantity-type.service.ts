import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuantityTypeService {
  private saveTypeUrl = 'http://localhost:3000/api/quantity-type/savetype';
  private getTypeUrl = 'http://localhost:3000/api/quantity-type/getType';

  constructor(private http: HttpClient) { }
  savetype(data) {
    return this.http.post<any>(this.saveTypeUrl, data);
  }

  getType()
  {
    return this.http.get<any>(this.getTypeUrl);
  }


}
