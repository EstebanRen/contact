import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { PersonalContact } from 'src/app/entities/model-contacts';
import { ContactListService } from 'src/app/services/contact-api.service';
import { ContactStateService } from 'src/app/services/contact-state.service';
import { ContactFacadeService } from 'src/app/services/contact.facade';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  contactListData!: PersonalContact[];
  authenticated: boolean = false;
  constructor(
    private contactFacade: ContactFacadeService,
    private contactState: ContactStateService,
  ) {
    combineLatest([
      this.contactState.getContactsData(),
    ]).subscribe(([contactListData]) => {
      this.contactListData = contactListData;
    });
  }
  searchEmail(email:any){
    this.contactFacade.searchEmail(email);
  }
  searchName(name:any){
    this.contactFacade.searchName(name);
  }
  searchPhone(phone:any){
    this.contactFacade.searchPhone(phone);
  }
  searchAllContacts(){
    this.contactFacade.getContacts();
  }
  editContact(contact:any){
    this.contactFacade.editContact(contact);
  }
}
