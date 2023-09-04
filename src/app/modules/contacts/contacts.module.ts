import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contacts-routing.module';
import { MaterialAngularModule } from '../material-angular/material-angular.module';
import { ContactFacadeService } from 'src/app/services/contact.facade';
import { ContactsComponent } from './contacts.component';
import { CardContactComponent } from './components/card-contacts/card-contacts.component';
import { FilterContactsComponent } from './components/filter-contacts/filter-contacts.component';

@NgModule({
  declarations: [
    ContactsComponent,
    CardContactComponent,
    FilterContactsComponent
  ],
  imports: [
    ContactRoutingModule,
    MaterialAngularModule,
    ReactiveFormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[ContactFacadeService]
})
export class ContactModule { }
