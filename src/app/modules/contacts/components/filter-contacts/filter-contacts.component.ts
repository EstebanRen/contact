import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-contacts',
  templateUrl: './filter-contacts.component.html',
  styleUrls: ['./filter-contacts.component.css']
})
export class FilterContactsComponent {
  @Output() searchName: EventEmitter<any> = new EventEmitter();
  @Output() searchEmail: EventEmitter<any> = new EventEmitter();
  @Output() searchPhone: EventEmitter<any> = new EventEmitter();
  @Output() searchAllContacts: EventEmitter<any> = new EventEmitter();
  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      name: [''],
      phone: [''],
      email: [''],
    });
  }
  onClickSearchEmail() {
    this.searchEmail.emit(this.searchForm.get('email')?.value)
  }
  onClickSearchPhone() {
    this.searchPhone.emit(this.searchForm.get('phone')?.value)
  }
  onClickSearchName() {
    this.searchName.emit(this.searchForm.get('name')?.value)
  }
  onClickClearFilters() {
    this.resetDataFilters();
    this.searchAllContacts.emit();
  }
  resetDataFilters() {
    this.searchForm.patchValue({
      name: '',
      phone: '',
      email: '',
    });
  }
}
