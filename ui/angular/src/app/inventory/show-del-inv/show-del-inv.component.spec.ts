import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDelInvComponent } from './show-del-inv.component';

describe('ShowDelInvComponent', () => {
  let component: ShowDelInvComponent;
  let fixture: ComponentFixture<ShowDelInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDelInvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDelInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
