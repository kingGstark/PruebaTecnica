import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @ViewChild('content') content: ModalComponent;
  @Output() getValue = new EventEmitter();
  constructor(private ngBModal: NgbModal) { }

  ngOnInit(): void {
  }

  show() {
    //creating modal
    const ngmodal: NgbModalRef = this.ngBModal.open(
      ModalComponent);
  }

  change(value) {
    this.getValue.emit(value);
  }
}
