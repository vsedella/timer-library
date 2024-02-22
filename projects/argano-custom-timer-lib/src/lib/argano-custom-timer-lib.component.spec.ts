import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArganoCustomTimerLibComponent } from './argano-custom-timer-lib.component';

describe('ArganoCustomTimerLibComponent', () => {
  let component: ArganoCustomTimerLibComponent;
  let fixture: ComponentFixture<ArganoCustomTimerLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArganoCustomTimerLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArganoCustomTimerLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
