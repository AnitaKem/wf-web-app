import { NgModule } from '@angular/core';
import { TuiAppBarModule } from '@taiga-ui/addon-mobile';
import { TuiButtonModule } from '@taiga-ui/core';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { TelegramModule } from '../telegram/telegram.module';

@NgModule({
  declarations: [HeaderComponent, UserInfoComponent],
  imports: [CommonModule, TuiAppBarModule, TuiButtonModule, TelegramModule],
  providers: [],
  exports: [HeaderComponent],
})
export class HeaderModule {}
