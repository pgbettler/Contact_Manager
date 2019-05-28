import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcontactsComponent } from './searchcontacts.component';

describe('SearchcontactsComponent', () => {
  let component: SearchcontactsComponent;
  let fixture: ComponentFixture<SearchcontactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchcontactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchcontactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
