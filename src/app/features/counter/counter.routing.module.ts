import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CounterRootComponent } from './containers/counter-root/counter-root.component';

const routes: Routes = [
  {
    path: '',
    component: CounterRootComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class CounterRoutingModule {}
