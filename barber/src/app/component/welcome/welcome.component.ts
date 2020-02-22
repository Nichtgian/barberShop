import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Cookies } from "../../enum/cookies.enum";
import { Times } from "../../enum/times.enum";
import { RoutePaths } from "../../enum/routePaths.enum";
import { CookieService } from "../../service/cookie.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: [
    "./welcome.component.css"
  ]
})

export class WelcomeComponent implements OnInit {

  public constructor(private router: Router) { }

  public ngOnInit(): void {
    // this.firstVisit();
  }

  private firstVisit(): void {
    const isFirstVisit: string = CookieService.get(Cookies.firstVisit);
    if (isFirstVisit == "false") {
      // this.router.navigate([RoutePaths.home]);
    }
  }

  public redirectToHome(): void {
    CookieService.set(Cookies.firstVisit, "false", Times.tenYearsInSeconds);
    this.router.navigate([RoutePaths.home]);
  }
}
