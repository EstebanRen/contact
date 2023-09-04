import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { PersonalContact } from '../entities/model-contacts';

interface State {
  contactsData: PersonalContact[];
  error: unknown;
}

@Injectable({ providedIn: 'root' })

export class ContactStateService {
  #state = new BehaviorSubject<State>({
    contactsData:[],
    error: null,
  });

  getContactsData() {
    return this.#state.asObservable().pipe(map((state) => state.contactsData));
  }
  getError() {
    return this.#state.asObservable().pipe(map((state) => state.error));
  }
  setContactData(contactsData: PersonalContact[]) {
    this.#state.next({
      ...this.#state.value,
      contactsData:contactsData,
    });
  }
  setError(error: unknown) {
    this.#state.next({
      ...this.#state.value,
      error,
    });
  }
}
