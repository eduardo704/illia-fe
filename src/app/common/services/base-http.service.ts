import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class  BaseHttpService {

  protected readonly  backendApi=environment.backendUrl;

  constructor(protected httpClient:HttpClient) { }
}
