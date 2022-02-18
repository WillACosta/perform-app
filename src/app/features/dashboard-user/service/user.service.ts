import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http"

import { User } from 'src/app/shared/models/user.model'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly http: HttpClient) {}

  getUsers() {
    const api = 'https://api.github.com'
    return this.http.get<User[]>(api + '/users')
  }
}
