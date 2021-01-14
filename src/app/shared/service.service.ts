import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Note } from './note';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
    private baseUrl = "http://localhost:7788";

    constructor(private http: HttpClient) {}
    

    getUser() {
      return this.http.get<User[]>(this.baseUrl + "/main/user");
    }

    getUserById(id) {
      return this.http.get<User>(this.baseUrl + "/main/user/"+id);
    }

    getUserByUsernameAndPassword(user:User) {
      return this.http.post<User>(this.baseUrl + "/main",user);
    }


    getNotes() {
      return this.http.get<Note[]>(this.baseUrl + "/note");
    }

    saveNote(agent:Note){
      return this.http.post<Note>(this.baseUrl+"/note",agent);
    }
  
    updateNote(agent:Note){
      return this.http.put<Note>(this.baseUrl + "/note", agent);
    }
  
    removeNote(agentId:number){
      return this.http.delete<Object>(this.baseUrl+"/note/"+agentId)
    }
}
