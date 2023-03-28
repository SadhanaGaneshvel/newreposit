import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from 'Models/Admin';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(public http: HttpClient) { }
  req:string="https://localhost:7193/api/Admins";
  getAllUsers():Observable<Admin[]>
  {
    return this.http.get<Admin[]>(this.req);
  }

}
