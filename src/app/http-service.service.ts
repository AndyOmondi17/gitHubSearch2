import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { Repository } from './repository';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  userProfile: Users[]=[];
  userRepository: Repository[]=[];

  url = 'https://api.github.com/users/';  
  token = '?access_token=d1ac228b9ad473c8dd7bd3a305af25d28de8bf53';

  constructor(private http:HttpClient) { }
  userSearch(userName:string){
    interface data {
      name:string;
      avatar_url:string;
      followers_url:string;
      following_url:string;
      bio:string;
      login:string;

    }
    let promise =  new Promise ((resolve, reject)=>{
      this.userProfile = [];
      this.http.get<data>(this.url+userName+this.token).toPromise().then(
        (result)=>{
          console.log(result);
          this.userProfile.push(result);
          resolve();
        },
        (error)=>{
          reject();
        })
    })
    return promise;
  }
  myRepo(userName:string){
    interface repoData {
      name: string;
      html_url: string;
      description:string;
      language:string;
    }
    let promise = new Promise ((resolve,reject)=>{
      this.userRepository = [];
      this.http.get<repoData>(this.url+userName+"/repos?"+this.token).toPromise().then(
        (result)=>{
          this.userRepository.push(result);
          resolve();
        },
        (error)=>{
          reject();
        })
    })
    return promise;
}
}