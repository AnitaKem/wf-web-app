import { NgModule } from '@angular/core';
import { TelegramLoginWidgetComponent } from './components/telegram-login-widget/telegram-login-widget.component';
import { TelegramService } from './services/telegram/telegram.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TelegramLoginWidgetComponent],
  imports: [CommonModule],
  providers: [TelegramService],
  exports: [TelegramLoginWidgetComponent],
})
export class TelegramModule {}
