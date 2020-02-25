import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Cookies }  from "../../enum/cookies.enum";
import { RoutePaths } from "../../enum/routePaths.enum";
import { CookieService } from "../../service/cookie.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: [
    "./home.component.css"
  ]
})

export class HomeComponent implements OnInit {
  businessHours: {day: string, time:string}[] = [
    { day: "Montag", time: "geschlossen" },
    { day: "Dienstag", time: "geschlossen" },
    { day: "Mittowch", time: "geschlossen" },
    { day: "Donerstag", time: "geschlossen" },
    { day: "Freitag", time: "geschlossen" },
    { day: "Samstag", time: "23:00 - 00:00" },
    { day: "Sonntag", time: "00:00 - 02:00" }
  ];

  routePaths = RoutePaths;

  public constructor(private router: Router) { }

  public ngOnInit(): void {
    this.redirectToWelcome();
  }

  private redirectToWelcome(): void {
    const isFirstVisit: string = CookieService.get(Cookies.firstVisit);
    if (!isFirstVisit || isFirstVisit == "true") {
      this.router.navigate([RoutePaths.welcome]);
    }
  }

  public redirectToUrl(url: string): void {
    window.location.href = url;
  }
}
