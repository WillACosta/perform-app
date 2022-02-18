import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { ChildUserComponent } from './components/child-user/child-user.component';
import { RootUserComponent } from './containers/root-user/root-user.component';
import { UserService } from './service/user.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [HttpClientModule, CommonModule],
  exports: [ChildUserComponent, RootUserComponent],
  declarations: [ChildUserComponent, RootUserComponent],
  providers: [UserService],
})
export class DashBoardUserModule {}
