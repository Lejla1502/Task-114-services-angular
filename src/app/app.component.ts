import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UsersService, CounterService]
})
export class AppComponent implements OnInit{
 
  nekiNaziv:number;
  
  constructor(private counterService:CounterService)
  {
   
  }

    ngOnInit(): void {
        this.nekiNaziv=this.counterService.counter;
    }
 


  
  //activeUsers = ['Max', 'Anna'];
  //inactiveUsers = ['Chris', 'Manu'];

  

  /*onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }*/
}
