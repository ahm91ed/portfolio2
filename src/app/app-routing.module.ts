import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { HTMLComponent } from './Components/html/html.component';
import { JavascriptComponent } from './Components/javascript/javascript.component';
import { AngularComponent } from './Components/angular/angular.component';

const routes: Routes = [

  {path:"" , redirectTo:"home" ,pathMatch:"full" },
  {path:"home" , component:HomeComponent , title:"home" },
  {path:"skills" , component:SkillsComponent , title:"skills"},
  {path:"projects" , component:ProjectsComponent , title:"projects" , 
    children:[
      {path:"" , redirectTo : "Angular" , pathMatch: "full"  } ,
    { path : "HTML" , component: HTMLComponent  } , 
    { path : "Javascript" , component: JavascriptComponent   } ,
    { path : "Angular" , component: AngularComponent   }
  ] 
  },
  {path:"**" , component:NotfoundComponent , title:"Notfound" },



];

@NgModule({
  imports: [RouterModule.forRoot(routes ,   {scrollPositionRestoration : "enabled" }       )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
