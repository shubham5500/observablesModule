import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userActivated1 = false;
  userActivated2 = false;

  constructor(private userService : UsersService){

  }

  ngOnInit(): void {
    this.userService.userActivated.subscribe(
      (data)=>{
        if(data == 1){
          this.userActivated1 = true;
        }else if(data == 2){
          this.userActivated2 = true;
        }
      },
      (error)=>{
        console.log(error)
      }
    )
  }
}
