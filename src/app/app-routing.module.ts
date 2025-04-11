import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MemberTableComponent } from './components/member-table/member-table.component';
import { MemberComponent } from './components/member/member.component';
import { MenuComponent } from './components/menu/menu.component';


const routes: Routes = [
    { path: 'menu', component: MenuComponent },
    {path: 'login', component: LoginComponent },
    {path: 'home', component: HomeComponent },
    {path: 'member', component: MemberComponent},
    {path: 'member-table', component: MemberTableComponent},
    // {path: 'Admin', loadChildren:() => {import('').then(m => m.AdminModule)}}
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }