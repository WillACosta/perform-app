import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-child-user',
  templateUrl: './child-user.component.html',
  styleUrls: ['./child-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildUserComponent {
  @Input() users: User[] | null;

  userIdAndLogin(user: User): string {
    return `${user.id} / @${user.login}`;
  }

  get allUsers() {
    /// Este ponto sempre será chamado, pois o CD estará sempre atualizando a View a partir deste ponto
    return this.users;
  }
}
