import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercompoComponent } from './usercompo.component';

describe('UsercompoComponent', () => {
  let component: UsercompoComponent;
  let fixture: ComponentFixture<UsercompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercompoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
