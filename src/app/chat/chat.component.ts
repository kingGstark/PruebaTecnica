import { Component, OnInit } from '@angular/core';
import { Message } from '../_models/message';
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
  seeMessageOptions: boolean = false;
  currentThing: any;
  ngOnInit(): void {
    this.auth.users$.subscribe(x => {
      this.users = x
    });
  }

  seeMessageOptionsHandler() {

    this.seeMessageOptions = true;
    console.log(this.seeMessageOptions);

  }

  deleteMessage(message){
    let updatedMessage={
      id:message.id,
    uid:message.uid,
    messageDate:message.messageDate
    }
    this.chat.deleteMessage(updatedMessage);
    this.seeMessageOptions=false;
  }
  getUserData(id): User {
    return this.users.filter(user => user.uid == id)[0];
  }
  sendMessage() {
   
    this.chat.sendMessage(this.messageText)
    this.messageText = ''
  }
}
