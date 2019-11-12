import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserLoginComponent } from './UI/user/user-login/user-login.component';
import { UserRegisterComponent } from './UI/user/user-register/user-register.component';
import { TrainerRegisterComponent } from './UI/trainer-register/trainer-register.component';
import { UserDashboardComponent } from './UI/user/user-dashboard/user-dashboard.component';
import { PageNotFoundComponent } from './UI/page-not-found/page-not-found.component';
import { SearchTrainingsComponent } from './UI/user/search-trainings/search-trainings.component';
import { SendMentorReqComponent } from './UI/user/send-mentor-req/send-mentor-req.component';
import { UserProfileComponent } from './UI/user/user-profile/user-profile.component';
import { UserCurrentTrainingComponent } from './UI/user/user-current-training/user-current-training.component';
import { UserCompletedTrainingComponent } from './UI/user/user-completed-training/user-completed-training.component';
import { PaymentInfoComponent } from './UI/user/payment-info/payment-info.component';
import { UserNotificationComponent } from './UI/user/user-notification/user-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TrainerRegisterComponent,
    UserDashboardComponent,
    PageNotFoundComponent,
    SearchTrainingsComponent,
    SendMentorReqComponent,
    UserProfileComponent,
    UserCurrentTrainingComponent,
    UserCompletedTrainingComponent,
    PaymentInfoComponent,
    UserNotificationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
