import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Interface/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  public user!: IUser;
  constructor() { }

  ngOnInit(): void {
  }

}
