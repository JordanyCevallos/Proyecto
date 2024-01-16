import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewComponent } from './view/view.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component:DashboardComponent
  },
  {
    path: 'create',
    component:CreateComponent
  },
  {
    path:'create/:id',
    component:CreateComponent
  },
  {
    path: 'view',
    component:ViewComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
 
  {
      path: 'login',
     redirectTo: '/home',
      pathMatch: 'full' ,
  }
  
  
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
