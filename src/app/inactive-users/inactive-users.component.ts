import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersService:UsersService, private counterService:CounterService){

  }
  ngOnInit(): void {
    this.users=this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
   // this.usersService.userSetToActive.emit(id);
   this.usersService.setToActive(id);
   this.counterService.incrementCounter();
   //this.counterService.counter++;
   //console.log(this.counterService.counter);

  }
}
