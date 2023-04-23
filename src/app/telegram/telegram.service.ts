import { Inject, Injectable } from '@angular/core';
import { WINDOW } from '../window.token';

@Injectable({
  providedIn: 'root',
})
export class TelegramService {
  webApp: WebApp;

  constructor(@Inject(WINDOW) private window: Window) {
    this.webApp = this.window.Telegram.WebApp;
  }

  getUserData(): WebAppUser | null {
    return this.webApp.initDataUnsafe.user || null;
  }
}
