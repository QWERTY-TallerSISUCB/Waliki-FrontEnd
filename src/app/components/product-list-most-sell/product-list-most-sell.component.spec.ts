import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListMostSellComponent } from './product-list-most-sell.component';

describe('ProductListMostSellComponent', () => {
  let component: ProductListMostSellComponent;
  let fixture: ComponentFixture<ProductListMostSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListMostSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListMostSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
