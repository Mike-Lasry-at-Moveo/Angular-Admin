import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { IUser } from 'src/app/Interface/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  
  public user!: IUser;
  public key: String;
  public value: String;

  constructor(private router: ActivatedRoute,
              private usersService: UserService ) 
  {
    this.user = {} as IUser;
    this.key = "";
    this.value = "";
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.user._id = params.get('id') as String;
    });
  }

  public updateUser(key: String, value: String){
    const update = this.getUpdate(key,value) && {_id: this.user._id};
    this.usersService.updateUser(update);
  }

  private getUpdate(key:String, value: String){
    switch (key){
        case "firstName":return { firstName:value };
        case "lastName":return { lastName: value };
        case "username":return { username: value };
        case "address":return { address: value };
        case "email":return { email: value };
        case "hash":return { hash: value };
        case "salt":return { salt: value };
        case "role":return { role: value };
        default:return "";
    }
  }

   clickme(){
    window.alert(this.user._id);
  }
}
