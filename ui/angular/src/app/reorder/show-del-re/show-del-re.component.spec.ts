import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDelReComponent } from './show-del-re.component';

describe('ShowDelReComponent', () => {
  let component: ShowDelReComponent;
  let fixture: ComponentFixture<ShowDelReComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDelReComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDelReComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
