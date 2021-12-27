import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import IResponse from '../Interface/response';
import { IUser } from '../Interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private FETCH_URL: string;
  constructor(private http: HttpClient) {
    this.FETCH_URL = environment.FETCH_USERS_URL
  }

  public fetchUsers = (): Observable<IResponse> => {
    return this.http.get<IResponse>(this.FETCH_URL);
  }

  public updateUser = (update: any): Observable<IResponse> => {
    return this.http.patch<IResponse>(this.FETCH_URL, update);
  }  

  public getUserById = (id: String): Observable<IResponse> => {
    return this.http.get<IResponse>(`${this.FETCH_URL}/${id}`);
  }  
}
