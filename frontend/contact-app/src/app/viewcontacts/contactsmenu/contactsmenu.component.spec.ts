import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsmenuComponent } from './contactsmenu.component';

describe('ContactsmenuComponent', () => {
  let component: ContactsmenuComponent;
  let fixture: ComponentFixture<ContactsmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
