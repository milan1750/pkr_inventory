import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModelTypeService {

  private saveTypeUrl = 'http://localhost:3000/api/model-type/savetype';
  private getTypeUrl = 'http://localhost:3000/api/model-type/getType';

  constructor(private http: HttpClient) { }
  savetype(data) {
    return this.http.post<any>(this.saveTypeUrl, data);
  }

  getType() {
    return this.http.get<any>(this.getTypeUrl);
  }

}
