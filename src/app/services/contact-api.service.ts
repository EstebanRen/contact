import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { PersonalContact } from '../entities/model-contacts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContactListService {

  constructor(private http: HttpClient) { }
  
  getContacts(){
    return this.http.get<PersonalContact[]>(environment.urlDataContacts);
  }
  updateContact(id: number, contactData: PersonalContact): Observable<PersonalContact> {
    return this.http.put<PersonalContact>(`${environment.urlDataContacts}/actualizar/${id}`, contactData);
  }
  getContactByName(name: string): Observable<PersonalContact> {
    return this.http.get<PersonalContact>(`${environment.urlDataContacts}/consultar/${name}`);
  }
  getContactByPhone(phone: number): Observable<PersonalContact> {
    return this.http.get<PersonalContact>(`${environment.urlDataContacts}/consultar/${phone}`);
  }
  getContactByEmail(email: string): Observable<PersonalContact> {
    return this.http.get<PersonalContact>(`${environment.urlDataContacts}/consultar/${email}`);
  }
}
