import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetInMenuComponent } from './set-in-menu.component';

describe('SetInMenuComponent', () => {
  let component: SetInMenuComponent;
  let fixture: ComponentFixture<SetInMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetInMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetInMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
