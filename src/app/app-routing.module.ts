import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  { path: '',
    redirectTo: '/user_login',
    pathMatch: 'full'
  },
  { path: 'user_login', component : UserLoginComponent},
  { path: 'user-register', component:UserRegisterComponent},
  { path: 'trainer-register', component: TrainerRegisterComponent},
  { path: 'user-dashboard', component : UserDashboardComponent},
  { path: 'search-trainings', component: SearchTrainingsComponent},
  { path: 'send-mentor-req', component: SendMentorReqComponent},
  { path: 'user-profile', component: UserProfileComponent},
  { path: 'user-current-training', component: UserCurrentTrainingComponent},
  { path: 'user-completed-training', component: UserCompletedTrainingComponent},
  { path: 'payment-info', component: PaymentInfoComponent },
  { path: 'user-notification', component: UserNotificationComponent},
  // { path: '', component: },
  { path: '**', component: PageNotFoundComponent }

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents= [UserLoginComponent,
                                 UserRegisterComponent,
                                TrainerRegisterComponent,
                               UserDashboardComponent,
                               SearchTrainingsComponent,
                               SendMentorReqComponent,
                               UserProfileComponent,
                               UserCurrentTrainingComponent,
                               UserCompletedTrainingComponent,
                               PaymentInfoComponent,
                               UserNotificationComponent,
                               PageNotFoundComponent]
