import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Interface/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  public users!: IUser[];
  constructor(private usersService: UserService) { 
    this.usersService.fetchUsers().subscribe(response => {
      this.users = response.data;
    });
  }

  ngOnInit(): void {
  }

}
