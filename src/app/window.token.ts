import { InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('Global window object', {
  factory: () => window,
});

declare global {
  interface Window {
    Telegram: Telegram;
  }
}
