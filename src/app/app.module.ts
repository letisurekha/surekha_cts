import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './head/logo/logo.component';
import { UploadComponent } from './head/upload/upload.component';
import { MediaComponent } from './head/media/media.component';
import { FollowersComponent } from './head/followers/followers.component';
import { NewsfeedComponent } from './acc/newsfeed/newsfeed.component';
import { BlockedAccountComponent } from './acc/blocked-account/blocked-account.component';
import { UpdatesComponent } from './acc/updates/updates.component';
import { SearchComponent } from './acc/search/search.component';
import { LogoutComponent } from './acc/logout/logout.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    UploadComponent,
    MediaComponent,
    FollowersComponent,
    NewsfeedComponent,
    BlockedAccountComponent,
    UpdatesComponent,
    SearchComponent,
    LogoutComponent,
    LoginComponent,
    RegistrationComponent,
    AccountComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
