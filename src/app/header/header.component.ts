import { Component } from '@angular/core';
import { TelegramService } from '../telegram/telegram.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private readonly telegramService: TelegramService) {}
}
