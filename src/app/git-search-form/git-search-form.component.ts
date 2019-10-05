import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-git-search-form',
  templateUrl: './git-search-form.component.html',
  styleUrls: ['./git-search-form.component.css']
})
export class GitSearchFormComponent implements OnInit {
  @Output () emitUsers = new EventEmitter<any>()

  userName:string;

  user(){
     this.emitUsers.emit(this.userName);
  }

  constructor() { }

  ngOnInit() {
  }

}
