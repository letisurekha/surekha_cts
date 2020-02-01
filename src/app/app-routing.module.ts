import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoComponent } from './head/logo/logo.component';
import { UploadComponent } from './head/upload/upload.component';
import { MediaComponent } from './head/media/media.component';
import { FollowersComponent } from './head/followers/followers.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NewsfeedComponent } from './acc/newsfeed/newsfeed.component';
import { BlockedAccountComponent } from './acc/blocked-account/blocked-account.component';
import { SearchComponent } from './acc/search/search.component';
import { UpdatesComponent } from './acc/updates/updates.component';
import { LogoutComponent } from './acc/logout/logout.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path:"", redirectTo : "login", pathMatch: "full"},
  { path:"logo", component: LogoComponent},
  { path:"upload", component: UploadComponent},
  { path:"media", component: MediaComponent},
  { path:"followers", component: FollowersComponent},
  { path:"login", component: LoginComponent},
  { path:"registration", component: RegistrationComponent},
  { path:"newsfeed", component: NewsfeedComponent},
  { path:"blocked-account", component: BlockedAccountComponent},
  { path:"search", component: SearchComponent},
  { path:"updates", component: UpdatesComponent},
  { path:"account", component: AccountComponent},
  { path:"home", component: HomeComponent},
  { path:"logout", component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
