import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { ModalComponent } from '../modal/modal.component';
import { Contact } from '../_models/contact';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @ViewChild('content') content: ModalComponent;
  @Input() term: string = ''
  selectedContact: Contact;
  constructor(public contactsService: ContactsService, private ngBModal: NgbModal) { }
  ngOnInit(): void {
  }



  editContact(contact: any) {

    const ngmodal: NgbModalRef = this.ngBModal.open(
      ModalComponent);

    ngmodal.componentInstance.contact = _.cloneDeep(contact);

    // ejemplo de resultado al cerrar modal

  }
  deleteContact(contactId) {
    this.contactsService.delete(contactId)
  }
}
