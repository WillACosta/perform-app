import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-root-user',
  templateUrl: './root-user.component.html',
  styleUrls: ['./root-user.component.scss'],
})
export class RootUserComponent implements OnInit {
  constructor(private userService: UserService) {}

  users$: Observable<User[]>;

  ngOnInit(): void {
    this.users$ = this.userService.getUsers().pipe();
  }
}
