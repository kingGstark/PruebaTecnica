import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Message } from '../_models/message';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  Messages$: Observable<Message[]>
  MessageRef = this.Db.collection('GeneralChat', ref => ref.orderBy('messageDate', "asc"));

  constructor(public Db: AngularFirestore, private auth: AuthService) {
    //getting observable to get the data
    this.Messages$ = this.MessageRef.snapshotChanges().pipe(
      map(Messages => Messages.map(
        Message => {
          const data = Message.payload.doc.data() as Message
          const id = Message.payload.doc.id
          return { id, ...data }
        }
      )
      ))


  }

  sendMessage(message: string) {
    let messageData = {
      uid: this.auth.user.uid,
      text: message,
      messageDate: firebase.default.firestore.Timestamp.now()
    }
    this.MessageRef.add(messageData);
    console.log('done')
  }



}
