import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDelSupComponent } from './show-del-sup.component';

describe('ShowDelSupComponent', () => {
  let component: ShowDelSupComponent;
  let fixture: ComponentFixture<ShowDelSupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDelSupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDelSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
