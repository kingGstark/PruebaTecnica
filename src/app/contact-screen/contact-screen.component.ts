import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-contact-screen',
  templateUrl: './contact-screen.component.html',
  styleUrls: ['./contact-screen.component.css']
})
export class ContactScreenComponent implements OnInit {

  constructor(public auth: AuthService) { }
  //variable to filter
  search = ''
  ngOnInit(): void {

  }

}
