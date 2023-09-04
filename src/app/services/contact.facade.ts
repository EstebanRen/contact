import { Injectable } from '@angular/core';
import { PersonalContact } from '../entities/model-contacts';
import { ContactListService } from './contact-api.service';
import { ContactStateService } from './contact-state.service';
import { MatDialog } from '@angular/material/dialog';


@Injectable()
export class ContactFacadeService {
  contactListData!: PersonalContact[];

  constructor(
    private contactService: ContactListService,
    private contactbState: ContactStateService,
    private dialog: MatDialog
  ) {
    this.contactService.getContacts().subscribe((response: PersonalContact[]) => {
      this.mappingDataFromService(response);
    }, (error: any) => {
    });
  }

  getContacts() {
    this.contactService.getContacts().subscribe((response: PersonalContact[]) => {
      this.mappingDataFromService(response);
    })
  }
  mappingDataFromService(response: PersonalContact[]): void {
    this.contactListData = response;
    this.updateContactData(this.contactListData);
  }
  updateContactData(contactData: PersonalContact[]): void {
    this.contactbState.setContactData(contactData);
  }
  searchEmail(email: any) {
    this.contactService.getContactByEmail(email).subscribe((response: PersonalContact) => {
    })
    this.mappingDataFromService(this.filterByEmail(email));
  }
  searchName(name: any) {
    this.contactService.getContactByName(name).subscribe((response: PersonalContact) => {
    })
    this.mappingDataFromService(this.filterByName(name));  
  }
  searchPhone(phone: any) {
    this.contactService.getContactByPhone(phone).subscribe((response: PersonalContact) => {
    })
    this.mappingDataFromService(this.filterByPhone(phone));
  }
  filterByName(name: string): any[] {
    return this.contactListData.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase()));
  }

  filterByEmail(email: string): any[] {
    return this.contactListData.filter(contact => contact.email.toLowerCase().includes(email.toLowerCase()));
  }

  filterByPhone(phone: string): any[] {
    return this.contactListData.filter(contact => contact.phone.toString().includes(phone));
  }
  editContact(contact: PersonalContact) {
    this.contactService.updateContact(contact.id,contact).subscribe((response: PersonalContact) => {
    })
    this.mappingDataFromService(this.updateData(contact))
  }
  updateData(contact: PersonalContact){
    const  updatedJson = this.contactListData.map(obj => {
      if (obj.id == contact.id) {
        return { ...obj, ...contact };
      }
      return obj; 
    });
    return updatedJson;
  }

}
