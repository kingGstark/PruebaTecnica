import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { concat, Observable } from 'rxjs';
import { Contact } from './_models/contact';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts$: Observable<Contact[]>
  contactRef = this.Db.collection<Contact>('Contacts');

  constructor(public Db: AngularFirestore) {
    this.contacts$ = this.contactRef.snapshotChanges().pipe(
      map(contacts => contacts.map(
        contact => {
          const data = contact.payload.doc.data() as Contact
          const id = contact.payload.doc.id
          return { id, ...data }
        }
      )
      ))


  }


  createOrEdit(contact: Contact) {
    console.log(contact);
    let contactInfo = {
      fullName: contact.fullName,
      email: contact.email,
      age: contact.age,
      address: contact.address
    }
    contact.id ? this.contactRef.doc(contact.id).update(contact) : this.contactRef.add(contactInfo);

  }

  delete(contactId) {
    this.contactRef.doc(contactId).delete();
  }
}
