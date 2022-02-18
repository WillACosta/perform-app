import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterRootComponent } from './counter-root.component';

describe('CounterRootComponent', () => {
  let component: CounterRootComponent;
  let fixture: ComponentFixture<CounterRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
