import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-screen',
  templateUrl: './contact-screen.component.html',
  styleUrls: ['./contact-screen.component.css']
})
export class ContactScreenComponent implements OnInit {

  constructor() { }
  search = ''
  ngOnInit(): void {
    console.log(this.search);

  }

}