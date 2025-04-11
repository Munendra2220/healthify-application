import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MemberComponent } from './components/member/member.component';
import { MemberTableComponent } from './components/member-table/member-table.component';
import { FilterPipe } from './filter.pipe';
import { ValidatesDirective } from './directive/validates.directive';
import { HomeChildComponent } from './components/home/home-child/home-child.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    MemberComponent,
    MemberTableComponent,
    FilterPipe,
    ValidatesDirective,
    HomeChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
