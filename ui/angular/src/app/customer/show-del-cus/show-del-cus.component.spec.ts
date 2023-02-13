import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDelCusComponent } from './show-del-cus.component';

describe('ShowDelCusComponent', () => {
  let component: ShowDelCusComponent;
  let fixture: ComponentFixture<ShowDelCusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDelCusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDelCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
