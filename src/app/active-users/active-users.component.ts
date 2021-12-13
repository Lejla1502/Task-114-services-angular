import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { CounterService } from '../counter.service';
import { UsersService } from '../users.service';

@Injectable()
@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
   users: string[];
  nekiNaziv: number;
 // @Output() userSetToInactive = new EventEmitter<number>();

 
  
  constructor(private usersService:UsersService, private counterService:CounterService){
    this.nekiNaziv=this.counterService.getCounter;

  }
  
  ngOnInit(): void {
    this.users=this.usersService.activeUsers;

  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
    this.counterService.incrementCounter();
    this.nekiNaziv=this.counterService.getCounter;

    //this.counterService.counter++;
    //console.log(this.counterService.counter);
  }
}
