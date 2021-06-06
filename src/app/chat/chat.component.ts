import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { AuthService } from '../_services/auth.service';
import { ChatService } from '../_services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(public chat: ChatService, public auth: AuthService) { }
  users: User[];
  messageText: ''
  ngOnInit(): void {
    this.auth.users$.subscribe(x => {
      this.users = x
    });
  }

  getUserData(id): User {
    return this.users.filter(user => user.uid == id)[0];
  }
  sendMessage() {
    this.chat.sendMessage(this.messageText)
    this.messageText = ''
  }
}
