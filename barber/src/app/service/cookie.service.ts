import { Injectable } from "@angular/core";
import { Times } from "../enum/times.enum";

@Injectable({
  providedIn: "root"
})

export class CookieService {
  public constructor() { }

  public static set(name: string, value: string, expireTimeSeconds: number): void {
    const expires = new Date(new Date().getTime() + (expireTimeSeconds * Times.msOfSeconds)).toUTCString();
    document.cookie = name + "=" + value + "; expires=" + expires + "; path=/";
  }

  public static get(name: string): string {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");

    if (parts.length == 2) {
      return parts
        .pop()
        .split(";")
        .shift();
    }

    return "";
  }

  public static delete(name: string): void {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }
}
