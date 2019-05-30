import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { ViewcontactsComponent } from './viewcontacts/viewcontacts.component';
  import { ContactsmenuComponent } from './viewcontacts/contactsmenu/contactsmenu.component';
    import { SearchcontactsComponent } from './viewcontacts/contactsmenu/searchcontacts/searchcontacts.component';
  import { AddcontactComponent } from './viewcontacts/addcontact/addcontact.component';
  import { ContactdetailsComponent } from './viewcontacts/contactdetails/contactdetails.component';
    import { EditcontactComponent } from './viewcontacts/contactdetails/editcontact/editcontact.component';
    import { DeletecontactComponent } from './viewcontacts/contactdetails/deletecontact/deletecontact.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    SignupComponent,
    AddcontactComponent,
    ViewcontactsComponent,
    ContactsmenuComponent,
    ContactdetailsComponent,
    SearchcontactsComponent,
    EditcontactComponent,
    DeletecontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
