import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { Contact } from '../_models/contact';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import { ContactsService } from '../_services/contacts.service';

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

    //creating modal

    const ngmodal: NgbModalRef = this.ngBModal.open(
      ModalComponent);

    ngmodal.componentInstance.contact = _.cloneDeep(contact);



  }
  deleteContact(contactId) {
    this.contactsService.delete(contactId)
  }
}
