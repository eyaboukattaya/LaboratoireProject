import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberListComponent } from './member-list/member-list.component';

const routes: Routes = [{
  path: 'members',
  pathMatch:'full',
  component: MemberListComponent,
},{
  path: 'form',
  pathMatch:'full',
  component: MemberFormComponent,
},
{
  path: 'login',
  pathMatch:'full',
  component: LoginComponent,
},
{
  path: 'members/:id/edit',
  pathMatch:'full',
  component: MemberFormComponent,
},
{path: '',
pathMatch:'full',
redirectTo:'login',


},
{path: '**',

redirectTo:'login',

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }