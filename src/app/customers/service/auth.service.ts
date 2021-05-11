import { Injectable, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore,AngularFirestoreDocument } from "@angular/fire/firestore";
import { User } from "../shared/user";
//import * as firebase from 'firebase';
//import { auth } from 'firebase/app';
import firebase from 'firebase/app'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;
  myuser:any
  name:string;

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    private fireservices: AngularFirestore) {
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.userData = user;
          console.log(this.userData);
          var id = this.userData.uid;
          localStorage.setItem('userId',id);
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user'));
        } else {
          localStorage.setItem('user', null);
          JSON.parse(localStorage.getItem('user'));
        }
      })
     }



  signup(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        this.SetUserData(userCredentials.user);
    }).catch((error) => {
      window.alert(error.message);
    })

  }

  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.fireservices.doc(`user/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      userName: user.displayName,
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  SignIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          console.log('log');
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('userId');
      this.router.navigate(['sign-in']);
    })
  }

}
