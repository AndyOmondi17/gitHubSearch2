import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { Repository } from '../repository';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  theUsers:Users[];
  theRepositories:Repository[];


  constructor(private http:HttpServiceService) { }
 

  ngOnInit() {
    this.myName("AndyOmondi17");
  }
  myName(userName){
    this.http.userSearch(userName).then(
      (success)=>{
        this.theUsers=this.http.userProfile;
        console.log(this.theUsers)
  }, 

  (error)=>{
    console.log(error)
  });
  this.http.myRepo(userName).then(
    (success)=>{
      this.theRepositories = this.http.userRepository;  
      console.log(this.theRepositories);
    },
    (error)=>{
      console.log(error)
    });  

}

}
