import { NgModule } from '@angular/core';
import { SearchInputComponent } from './search-input.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchInputComponent],
  imports: [TuiButtonModule, TuiInputModule, ReactiveFormsModule],
  providers: [],
  exports: [SearchInputComponent],
})
export class SearchInputModule {}
