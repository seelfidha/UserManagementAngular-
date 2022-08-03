import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderPipe } from 'ngx-order-pipe';
import { User } from '../entity/User.model';
import { UserService} from '../services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title = "user component";
  users:User[];
  order:string = 'id';
  reverse: boolean = false;

  constructor(private userService:UserService, private router:Router,private orderPipe: OrderPipe){
    console.log("constructor");
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    return this.userService.getData().subscribe(data=>{
      console.log(data);
      this.users = data;

    });
  }
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

  sort(value){
    this.title = value;
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
    this.users = this.orderPipe.transform(this.users,this.order);
  }

}
