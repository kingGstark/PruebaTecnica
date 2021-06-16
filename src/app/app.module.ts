import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactScreenComponent } from './contact-screen/contact-screen.component';
import { ModalComponent } from './modal/modal.component';
import { Pipe, PipeTransform } from '@angular/core';
import * as $ from "jquery";
import {HttpClientModule} from '@angular/common/http'
import { FilterPipe } from './pipes/FilterPipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatComponent } from './chat/chat.component';
import { ContactsService } from './_services/contacts.service';
import { clickOutsideDirective } from './_directives/clickOutsideDirective';
import { GeoLocationComponent } from './geo-location/geo-location.component';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ContactsComponent,
    ContactScreenComponent,
    ModalComponent,
    FilterPipe,
    ChatComponent,
    clickOutsideDirective,
    GeoLocationComponent
  ],
  imports: [
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
