import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { WelcomeComponent } from "./component/welcome/welcome.component";
import { HomeComponent } from "./component/home/home.component";
import { RoutePaths } from "./enum/routePaths.enum";

const routes: Routes = [
  {
    path: RoutePaths.welcome,
    component: WelcomeComponent
  },
  {
    path: RoutePaths.home,
    redirectTo: RoutePaths.default
  },
  {
    path: RoutePaths.default,
    component: HomeComponent
  },
  {
    path: RoutePaths.notFound,
    redirectTo: RoutePaths.default
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
