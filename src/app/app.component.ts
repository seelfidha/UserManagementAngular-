import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome to user management system';

  constructor(private router:Router, private usersService : UserService){}
/*
  goToPage(pageName:string):void{
    /*let result = this.usersService.getData().subscribe(data=>{
      console.warn(data);
    });*/
    
//  }
ngOnInit(): void {
  this.router.navigate(['welcome']);
}

}
