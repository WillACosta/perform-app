import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterChildComponent } from './components/counter-child/counter-child.component';
import { CounterRootComponent } from './containers/counter-root/counter-root.component';

import { CounterRoutingModule } from './counter.routing.module';

@NgModule({
  declarations: [CounterChildComponent, CounterRootComponent],
  imports: [CommonModule, CounterRoutingModule],
})
export class CounterModule {}
