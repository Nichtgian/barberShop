import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { isDevMode } from '@angular/core';
import { Icons } from "../enum/icons.enum";

@Injectable({
  providedIn: "root"
})

export class IconService {
  static allIcons: string[] = [
    Icons.instagram,
    Icons.youtube,
    Icons.razor,
  ];

  public constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) { }

  public registerIcons(): void {
    IconService.allIcons.forEach(icon => {
      this.matIconRegistry.addSvgIcon(icon, this.getFullIconPath(icon));
    });
  }

  private getFullIconPath(name: string): SafeResourceUrl {
    let dev = "";
    if (!isDevMode())
      dev = "barberShop/";
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`../${dev}assets/images/icons/${name}.svg`);
  }
}
