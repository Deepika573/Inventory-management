import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDelOrdComponent } from './show-del-ord.component';

describe('ShowDelOrdComponent', () => {
  let component: ShowDelOrdComponent;
  let fixture: ComponentFixture<ShowDelOrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDelOrdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDelOrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
