import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialsModule } from './Modules/angular-materials/angular-materials.module';
import { AdminPageComponent } from 'src/app/Pages/Admin/admin-page/admin-page.component';
import { HomePageComponent } from 'src/app/Pages/Home/home-page/home-page.component';

import { RouterModule } from "@angular/router";
import { environment } from 'src/environments/environment';

import { LoginPageComponent } from './Pages/Auth/login-page/login-page.component';
import { SignupComponent } from './Pages/Auth/signup/signup.component';

import { UserCardComponent } from './Components/user-card/user-card.component';
import { UserUpdateComponent } from './Pages/Admin/user-update/user-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminPageComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupComponent,
    UserCardComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: environment.BASE_URL, component: HomePageComponent},
      {path: environment.ADMIN_SUFFIX, component: AdminPageComponent},
      {path: environment.LOGIN_SUFFIX, component: LoginPageComponent},
      {path: environment.SIGNUP_SUFFIX, component: SignupComponent},
      {path: environment.UPDATE_SUFFIX, component: UserUpdateComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
