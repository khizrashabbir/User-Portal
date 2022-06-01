import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { NodesComponent } from './Dashboard/nodes/nodes.component';
import { LogoutComponent } from './logout/logout.component';
import { UsersComponent } from './Dashboard/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NodesComponent,
    LogoutComponent,
    UsersComponent
   
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule, 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }