import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TeacherComponent } from './Teacher/teacher/teacher.component';
import { FormsModule } from '@angular/forms';
import {TeacherService} from './Teacher/teacher/teacher.service';
import { AppRoutingModule } from './routing/app-routing.module';
import { TeacherSideBarComponent } from '../app/Teacher/teacher-side-bar/teacher-side-bar.component';
import { AccountLoginComponent } from './account-login/account-login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AccountRegisterComponent } from '../app/Admin/account-register/account-register.component';
import { ValidateService } from './services/validate.service';
import { AuthenticationService } from './services/authentication.service';
import {HttpClientModule} from '@angular/common/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ProfileComponent } from './profile/profile.component';
import { GuardService } from './services/guard.service';
import { LeaveApplicationComponent } from '../app/Teacher/leave-application/leave-application.component';
import { LeaveAppServiceService } from './services/leave-app-service.service';
import { AdminSideBarComponent } from './Admin/admin-side-bar/admin-side-bar.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { UserRegisterComponent } from './Admin/user-register/user-register.component';
import { RequestForMaintenanceComponent } from './Teacher/request-for-maintenance/request-for-maintenance.component';
import { AskForAdvancePaymentComponent} from './Teacher/ask-for-advance-payment/ask-for-advance-payment.component';
import { DeclareholidayComponent } from './Admin/declareholiday/declareholiday.component';
import { ApproveLeaveApplicationComponent} from './Admin/approve-leave-application/approve-leave-application.component';
import { AdminLinkGuardService } from './services/admin-link-guard.service';
import { TeacherLinkGuardService } from './services/teacher-link-guard.service';
import { StudentLinkGuardService } from './services/student-link-guard.service';
import { AdvPaymentFormService } from './services/adv-payment-form.service';
@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    TeacherSideBarComponent,
    AccountLoginComponent,
    NavBarComponent,
    HomeComponent,
    AccountRegisterComponent,
    ProfileComponent,
    LeaveApplicationComponent,
    AdminSideBarComponent,
    AdminComponent,
    UserRegisterComponent,
    RequestForMaintenanceComponent,
    AskForAdvancePaymentComponent,
    DeclareholidayComponent,
    ApproveLeaveApplicationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [TeacherService, ValidateService, AuthenticationService, GuardService, LeaveAppServiceService, AdminLinkGuardService, TeacherLinkGuardService, StudentLinkGuardService, AdvPaymentFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
