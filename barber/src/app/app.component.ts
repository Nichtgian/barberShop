import { Component } from "@angular/core";
import { IconService } from "./service/icon.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})

export class AppComponent {
  public constructor(private iconService: IconService) {
    this.iconService.registerIcons();
  }
}
