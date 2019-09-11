import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidingservicesComponent } from './providingservices.component';

describe('ProvidingservicesComponent', () => {
  let component: ProvidingservicesComponent;
  let fixture: ComponentFixture<ProvidingservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidingservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidingservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
