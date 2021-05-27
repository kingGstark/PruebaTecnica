import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @ViewChild('content') content: ModalComponent;
  @Input() term: string = ''
  constructor(public contactsService: ContactsService) { }
  ngOnInit(): void {
  }



  editContact() {

    this.content.openModal()
  }
  deleteContact(contactId) {
    this.contactsService.delete(contactId)
  }
}
