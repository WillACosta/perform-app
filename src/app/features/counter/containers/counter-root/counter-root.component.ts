import { ChangeDetectionStrategy, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { CounterChildComponent } from '../../components/counter-child/counter-child.component';

@Component({
  selector: 'app-counter-root',
  templateUrl: './counter-root.component.html',
  styleUrls: ['./counter-root.component.scss'],
})
export class CounterRootComponent implements DoCheck {

  @ViewChild(CounterChildComponent, { static: false }) counterChildRef: CounterChildComponent;

  ngDoCheck(): void {
    if(!!this.counterChildRef) {
      /// Verificar se os estados estão consistentes entre o Parent, que injetou o estado inicial e o componente filho
      console.log(`Parent Counter: ${ this.counter } || Child Counter: ${ this.counterChildRef.counter }`);
    }
  }

  counter: number = 0;

  handleIncrement() {
    this.counter++;
  }

  handleDecrement() {
    this.counter--;
  }
}
