import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

    counter:number=0;

    incrementCounter()
    {
      this.counter++;
      console.log("Counter final: "+this.counter);
    }

    get getCounter():number
    {
      return this.counter;
    }
}
