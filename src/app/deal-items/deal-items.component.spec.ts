import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealItemsComponent } from './deal-items.component';

describe('DealItemsComponent', () => {
  let component: DealItemsComponent;
  let fixture: ComponentFixture<DealItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
