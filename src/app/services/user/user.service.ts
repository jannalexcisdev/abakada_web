import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  register(userModel: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${BASE_URL}/user/register`, userModel)
  }

  login(username:string, password:string):Observable<UserModel> {
    return this.http.post<UserModel>(`${BASE_URL}/user/login`, {username, password})
  }

  getUsers():Observable<any> {
    return this.http.get(`${BASE_URL}/user`)
  }

  updateUser(id: number, userModel: UserModel): Observable<UserModel> {
    return this.http.patch<UserModel>(`${BASE_URL}/user/${id}`, userModel)
  }

  deleteUser(id:number): Observable<UserModel> {
    return this.http.delete<UserModel>(`${BASE_URL}/user/${id}`)
  }

  getUser(id:number): Observable<UserModel> {
    return this.http.get<UserModel>(`${BASE_URL}/user/${id}`)
  }
}
