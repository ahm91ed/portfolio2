import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HTMLComponent } from './Components/html/html.component';
import { JavascriptComponent } from './Components/javascript/javascript.component';
import { AngularComponent } from './Components/angular/angular.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SkillsComponent,
    ProjectsComponent,
    NotfoundComponent,
    NavbarComponent,
    HTMLComponent,
    JavascriptComponent,
    AngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
