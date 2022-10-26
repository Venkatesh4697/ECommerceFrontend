import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearanceItemsComponent } from './clearance-items.component';

describe('ClearanceItemsComponent', () => {
  let component: ClearanceItemsComponent;
  let fixture: ComponentFixture<ClearanceItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearanceItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearanceItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
