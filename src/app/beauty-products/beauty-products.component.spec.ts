import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyProductsComponent } from './beauty-products.component';

describe('BeautyProductsComponent', () => {
  let component: BeautyProductsComponent;
  let fixture: ComponentFixture<BeautyProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautyProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautyProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
