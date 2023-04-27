import { Component } from '@angular/core';
import { TgUser } from './telegram/types/tg-user.type';

declare global {
  interface Window {
    Telegram: Telegram;
    onTelegramLogin: (data: TgUser) => void;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Wendy factory';
}
