import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { TuiAppBarModule } from '@taiga-ui/addon-mobile';
import { TuiButtonModule } from '@taiga-ui/core';

@NgModule({
  declarations: [HeaderComponent],
  imports: [TuiAppBarModule, TuiButtonModule],
  providers: [],
  exports: [HeaderComponent],
})
export class HeaderModule {}
