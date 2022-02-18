import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RootUserComponent } from './features/dashboard-user/containers/root-user/root-user.component';

const routes: Routes = [
  {
    path: '',
    component: RootUserComponent,
  },
  {
    path: 'counter',
    loadChildren: () => import('./features/counter/counter.module').then((m) => m.CounterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
