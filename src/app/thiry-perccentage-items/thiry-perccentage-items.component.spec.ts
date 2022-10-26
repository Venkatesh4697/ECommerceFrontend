import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiryPerccentageItemsComponent } from './thiry-perccentage-items.component';

describe('ThiryPerccentageItemsComponent', () => {
  let component: ThiryPerccentageItemsComponent;
  let fixture: ComponentFixture<ThiryPerccentageItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThiryPerccentageItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThiryPerccentageItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
