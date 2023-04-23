import { Component } from '@angular/core';
import { TelegramService } from 'src/app/telegram/telegram.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private readonly telegramService: TelegramService) {}

  getUserData(): WebAppUser | null {
    return this.telegramService.getUserData();
  }
}
