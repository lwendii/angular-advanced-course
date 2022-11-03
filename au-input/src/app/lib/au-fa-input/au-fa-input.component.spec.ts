import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AuFaInputComponent } from './au-fa-input.component';

describe('AuFaInputComponent', () => {
  let component: AuFaInputComponent;
  let fixture: ComponentFixture<AuFaInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AuFaInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuFaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
