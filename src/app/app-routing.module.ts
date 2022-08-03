import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseAuthComponent } from './presentation/layout/base-auth/base-auth.component';

const routes: Routes = [{
  path: 'auth',
  component: BaseAuthComponent,
  children: [
    {
      path: 'login',
      loadChildren: ()=>
        import('./presentation/features/auth/login/login.module').then(
          (m) => m.LoginModule
        ),
    },
    {
      path: 'signup',
      loadChildren: ()=>
        import('./presentation/features/auth/signup/signup.module').then(
          (m) => m.SignupModule
        ),
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
