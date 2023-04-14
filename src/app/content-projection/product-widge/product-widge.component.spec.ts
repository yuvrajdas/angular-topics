import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWidgeComponent } from './product-widge.component';

describe('ProductWidgeComponent', () => {
  let component: ProductWidgeComponent;
  let fixture: ComponentFixture<ProductWidgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWidgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductWidgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
