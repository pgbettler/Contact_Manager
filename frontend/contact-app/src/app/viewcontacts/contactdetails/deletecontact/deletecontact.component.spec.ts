import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecontactComponent } from './deletecontact.component';

describe('DeletecontactComponent', () => {
  let component: DeletecontactComponent;
  let fixture: ComponentFixture<DeletecontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletecontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
