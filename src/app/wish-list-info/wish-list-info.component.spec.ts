import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListInfoComponent } from './wish-list-info.component';

describe('WishListInfoComponent', () => {
  let component: WishListInfoComponent;
  let fixture: ComponentFixture<WishListInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishListInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
