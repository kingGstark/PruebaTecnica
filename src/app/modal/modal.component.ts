import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Contact } from '../_models/contact';
import { NgForm } from '@angular/forms';
import { ContactsService } from '../contacts.service';
declare const $: any;
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() mId: number;
  @Input() updateContact: Contact;
  contact: Contact = new Contact();
  currentAddress: string = '';
  tittle = ''
  constructor(public contactService: ContactsService) { }
  ngOnInit(): void {

    if (this.updateContact) {
      this.contact = this.updateContact
      this.tittle = 'Update Contact'
    }
    else {
      this.tittle = " Add Contact"
    }

  }

  onSubmit(contactForm: NgForm) {

  }

  validateFields() {
    if (this.contact.address.length > 0 && this.contact.age && this.contact.email && this.contact.fullName) {
      return true
    }
    return false
  }
  addAdress() {
    this.currentAddress == '' ? '' : this.contact.address.push(this.currentAddress), this.currentAddress = '';
  }

  deleteAddress(index: number) {
    this.contact.address.splice(index, 1);
  }
  cleanModel() {
    this.contact = new Contact();
  }
  openModal() {

    $('#exampleModal' + this.mId).modal('show');
  }

  addContact() {
    this.contactService.createOrEdit(this.contact);
  }
}
