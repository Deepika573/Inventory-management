import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSupComponent } from './add-edit-sup.component';

describe('AddEditSupComponent', () => {
  let component: AddEditSupComponent;
  let fixture: ComponentFixture<AddEditSupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
