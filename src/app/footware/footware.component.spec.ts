import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootwareComponent } from './footware.component';

describe('FootwareComponent', () => {
  let component: FootwareComponent;
  let fixture: ComponentFixture<FootwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
