import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeanceComponent } from './ceance.component';

describe('CeanceComponent', () => {
  let component: CeanceComponent;
  let fixture: ComponentFixture<CeanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
