import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { mergeMap, switchMap, take } from 'rxjs/operators';
import { User } from '../_models/user';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  user$: Observable<User>
  users$: Observable<User[]>
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          this.user = user;
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );

    this.users$ = this.afs.collection<User>(`users`).snapshotChanges().pipe(map(snapshot =>
      snapshot.map(
        user => {
          const data = user.payload.doc.data() as User
          const id = user.payload.doc.id;
          return { id, ...data }
        })))
  }




  async googleSignin() {
    const provider = new firebase.default.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    this.updateUserData(credential.user);
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }

    return userRef.set(data, { merge: true })

  }

  async signOut() {
    await this.afAuth.signOut();
  }

  // getUserinfo(uid) {


  //   return this.afs
  //     .collection("Admins", (ref) =>
  //       ref.where("uid", "==", uid).limit(1)
  //     )
  //     .snapshotChanges()
  //     .pipe(mergeMap((user) => user));

  // }


}
