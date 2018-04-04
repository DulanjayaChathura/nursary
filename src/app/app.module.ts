import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TeacherComponent } from './Teacher/teacher/teacher.component';
import { FormsModule } from '@angular/forms';
import { TeacherDetailComponent } from './Teacher/teacher-detail/teacher-detail.component';
import {TeacherService} from './Teacher/teacher/teacher.service';
import { AppRoutingModule } from './routing/app-routing.module';
import { TeacherSideBarComponent } from './teacher-side-bar/teacher-side-bar.component';
import { AccountLoginComponent } from './account-login/account-login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AccountRegisterComponent } from './account-register/account-register.component';
import { ValidateService } from './services/validate.service';
@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    TeacherDetailComponent,
    TeacherSideBarComponent,
    AccountLoginComponent,
    NavBarComponent,
    HomeComponent,
    AccountRegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [TeacherService, ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
