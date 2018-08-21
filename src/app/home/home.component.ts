import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myNumber;

  constructor() { }

  ngOnInit() {
    const myObservable = Observable.create((observer: Observer<any>)=>{
      setTimeout(() => {
        observer.next('2 sec ho gaye next');
      }, 2000);
      setTimeout(() => {
        observer.next('4 sec ho gaye next');
      }, 4000);
      setTimeout(() => {
        observer.error('6 sec ho gaye error');
      }, 6000);
      setTimeout(() => {
        observer.complete();
      }, 8000);
    });

    myObservable.subscribe(
      (data)=>{
        console.log('data', data);
      },
      (error)=>{
        console.log('error', error);
      },
      (completed)=>{
        console.log('completed');
      }
    )
  }

}
