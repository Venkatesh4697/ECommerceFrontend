import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReturnOrdersComponent } from './my-return-orders.component';

describe('MyReturnOrdersComponent', () => {
  let component: MyReturnOrdersComponent;
  let fixture: ComponentFixture<MyReturnOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyReturnOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReturnOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
