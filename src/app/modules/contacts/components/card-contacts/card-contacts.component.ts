import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormContactsComponent } from 'src/app/components/form-contacts/form-contacts.component';
import { PersonalContact } from 'src/app/entities/model-contacts';

@Component({
  selector: 'app-card-contact',
  templateUrl: './card-contacts.component.html',
  styleUrls: ['./card-contacts.component.css'],
})
export class CardContactComponent {
  @Input() contactListData!: PersonalContact[];
  @Output() editContact: EventEmitter<any> = new EventEmitter();
  contactSelected!: PersonalContact;
  constructor(private dialog: MatDialog
  ) { }
  onClickSelectedContact(contact: any) {
    this.contactSelected = contact;
  }

  onClickEditContact() {
    const dialogRef = this.dialog.open(FormContactsComponent, {
      width: '50%',
      panelClass: 'modal-pricing-plans-page',
      data: this.contactSelected,
    }).afterClosed().subscribe(res => {
      if (res) {
        this.editContact.emit(res);
      }
    });
  }
  calculateAge(dateOfBirthString: string): number {
    const dateParts = dateOfBirthString.split('/');
    const day = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1;
    const year = parseInt(dateParts[2], 10);
    const dateOfBirth: Date = new Date(year, month, day);
    const currentDate: Date = new Date();
    const ageInMilliseconds: number = currentDate.getTime() - dateOfBirth.getTime();
    const ageInYears: number = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    return ageInYears;
  }
}

