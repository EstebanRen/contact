import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterContactsComponent } from './filter-contacts.component';

describe('FilterContactsComponent', () => {
  let component: FilterContactsComponent;
  let fixture: ComponentFixture<FilterContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterContactsComponent]
    });
    fixture = TestBed.createComponent(FilterContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
