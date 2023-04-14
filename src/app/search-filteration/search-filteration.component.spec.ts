import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterationComponent } from './search-filteration.component';

describe('SearchFilterationComponent', () => {
  let component: SearchFilterationComponent;
  let fixture: ComponentFixture<SearchFilterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFilterationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFilterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
