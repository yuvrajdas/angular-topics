import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchipComponent } from './matchip.component';

describe('MatchipComponent', () => {
  let component: MatchipComponent;
  let fixture: ComponentFixture<MatchipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
