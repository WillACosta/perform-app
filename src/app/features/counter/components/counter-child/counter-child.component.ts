import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-counter-child',
  templateUrl: './counter-child.component.html',
  styleUrls: ['./counter-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterChildComponent {
  @Input() counter: number;

  @Output() inc = new EventEmitter();
  @Output() dec = new EventEmitter();

  increment() {
    this.inc.emit('INCREMENTED');
  }

  decrement() {
    this.dec.emit('DECREMENTED');
  }
}
