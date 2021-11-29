import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface FactModel {
  fact: string,
  length: number
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = "https://catfact.ninja/fact";

  constructor(private httpClient: HttpClient) { }

  public getData(): Observable<FactModel> {
    return this.httpClient.get<FactModel>(this.apiUrl);
  }


}
