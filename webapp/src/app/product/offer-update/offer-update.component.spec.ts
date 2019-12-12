import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferUpdateComponent } from './offer-update.component';

describe('OfferUpdateComponent', () => {
  let component: OfferUpdateComponent;
  let fixture: ComponentFixture<OfferUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
