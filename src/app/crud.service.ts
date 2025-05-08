import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Iuser} from './iuser';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  base_url = 'http://localhost:3000/Users';
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<Iuser[]>(this.base_url);
  }

  postData(data: Iuser){
    return this.http.post(this.base_url, data);
  }

  getDataById(id: number){
    return this.http.get<Iuser>(this.base_url + '/'+id);
  }

  putDataById(data: Iuser){
    return this.http.put(this.base_url + '/'+data.id, data);
  }

  deleteDataById(id: number){
    return this.http.delete(this.base_url + '/'+id);
  }
}
