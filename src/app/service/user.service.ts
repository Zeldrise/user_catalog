import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

// import { response } from 'express';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl: string = 'https://retoolapi.dev/yZjtsj/customers';
  // private readonly apiUrl: string = 'https://randomuser.me/api';

  constructor(private http: HttpClient) {}

  //fetch all users
  getUsers(page: number, limit: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?_page=${page}&_limit=${limit}`);
    // .pipe(map((response) => this.processResponse(response)));
  }
  
  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`)
  }
}
