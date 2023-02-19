import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageproComponent } from './managepro.component';

describe('ManageproComponent', () => {
  let component: ManageproComponent;
  let fixture: ComponentFixture<ManageproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
