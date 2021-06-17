import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinstreComponent } from './sinstre.component';

describe('SinstreComponent', () => {
  let component: SinstreComponent;
  let fixture: ComponentFixture<SinstreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinstreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinstreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
