import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @ViewChild('content') content: ModalComponent;
  @Output() getValue = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  show() {
    this.content.openModal()
  }

  change(value) {
    this.getValue.emit(value);
  }
}
