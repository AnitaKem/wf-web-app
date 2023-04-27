import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  NgZone,
  Output,
  ViewChild,
} from '@angular/core';
import { WINDOW } from '@ng-web-apis/common';
import { TELEGRAM_LOGIN_WIDGET_CONFIG } from '../../telegram.constants';
import { TgUser } from '../../types/tg-user.type';

@Component({
  selector: 'app-telegram-login-widget',
  templateUrl: './telegram-login-widget.component.html',
})
export class TelegramLoginWidgetComponent implements AfterViewInit {
  @ViewChild('widgetContainer', { static: true }) scriptContainer: ElementRef;

  @Output() login: EventEmitter<TgUser> = new EventEmitter<TgUser>();

  constructor(
    private readonly ngZone: NgZone,
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(WINDOW) private window: Window
  ) {}

  ngAfterViewInit() {
    const script = this.document.createElement('script');

    Object.keys(TELEGRAM_LOGIN_WIDGET_CONFIG).forEach(key => {
      script.setAttribute(key, TELEGRAM_LOGIN_WIDGET_CONFIG[key]);
    });

    this.window.onTelegramLogin = (data: TgUser) => {
      this.ngZone.run(() => this.login.emit(data));
    };

    // this.window['onTelegramWidgetLoad' + randomSeed] = () =>
    //   this.ngZone.run(() => this.load.emit());
    // this.window['onTelegramWidgetLoadFail' + randomSeed] = () =>
    //   this.ngZone.run(() => this.loadError.emit());

    this.scriptContainer.nativeElement.innerHTML = '';
    this.scriptContainer.nativeElement.appendChild(script);
  }
}
