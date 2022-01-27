import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YeteneklerimizCozumlerimizComponent } from './yeteneklerimiz-cozumlerimiz.component';

describe('YeteneklerimizCozumlerimizComponent', () => {
  let component: YeteneklerimizCozumlerimizComponent;
  let fixture: ComponentFixture<YeteneklerimizCozumlerimizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YeteneklerimizCozumlerimizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YeteneklerimizCozumlerimizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
