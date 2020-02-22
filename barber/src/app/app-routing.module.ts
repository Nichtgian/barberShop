import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { WelcomeComponent } from "./welcome/welcome.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "welcome",
    component: WelcomeComponent
  },
  {
    path: "home",
    redirectTo: ""
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
