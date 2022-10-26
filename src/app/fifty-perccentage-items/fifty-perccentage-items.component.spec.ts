import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiftyPerccentageItemsComponent } from './fifty-perccentage-items.component';

describe('FiftyPerccentageItemsComponent', () => {
  let component: FiftyPerccentageItemsComponent;
  let fixture: ComponentFixture<FiftyPerccentageItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiftyPerccentageItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiftyPerccentageItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
