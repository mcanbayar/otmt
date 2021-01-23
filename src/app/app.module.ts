import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProjectsComponent } from './projects/projects.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { FriendlistComponent } from './friendlist/friendlist.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { ChatscreenComponent } from './chatscreen/chatscreen.component';
import { ProjectComponent } from './projects/project/project.component';
import { MytasksComponent } from './projects/mytasks/mytasks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProjectsComponent,
    NewprojectComponent,
    FriendlistComponent,
    NewtaskComponent,
    ChatscreenComponent,
    ProjectComponent,
    MytasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
