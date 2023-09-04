import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PersonalContact } from 'src/app/entities/model-contacts';

@Component({
  selector: 'app-form-contacts',
  templateUrl: './form-contacts.component.html',
  styleUrls: ['./form-contacts.component.css']
})
export class FormContactsComponent {
  Form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    protected dialogRef: MatDialogRef<FormContactsComponent>) {

    this.Form = new FormGroup({
      name: new FormControl(""),
      phone: new FormControl("", [Validators.pattern('^[0-9]+$')]),
      birthdate: new FormControl(""),
      address: new FormControl(""),
      email: new FormControl(""),
    });
  }
  ngOnInit(): void {
    this.initInfo();
  }
  initInfo() {
    if (this.data != undefined) {
      this.Form.patchValue({
        name: this.data.name,
        phone: this.data.phone,
        birthdate: this.formatDateToYearMonthDay(this.data.birthdate),
        address: this.data.address,
        email: this.data.email,
      });
    }
  }
  formatDateToYearMonthDay(isoDate: string) {
    const partesFecha = isoDate.split('/');
    const day = partesFecha[0];
    const month = partesFecha[1];
    const year = partesFecha[2];
    return `${year}-${month}-${day}`;
  }
  onClickEditateContact() {
    let dataContact = this.formatContact(this.data.id);
    this.dialogRef.close(dataContact);
  }
  formatContact(id:number){
    let dataContact: PersonalContact = {
      id:id,
      name: this.Form.get('name')?.value,
      phone: this.Form.get('phone')?.value,
      birthdate: this.formatDateToDMY(this.Form.get('birthdate')?.value),
      address: this.Form.get('address')?.value,
      email: this.Form.get('email')?.value,
    }
    return dataContact
  }
  formatDateToDMY(dateInYMD:any) {
    const dateParts = dateInYMD.split('-');
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }
}