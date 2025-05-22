import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {TruncatePipe} from './pipes/truncate.pipe';



@NgModule({
  declarations: [

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TruncatePipe,
    CommonModule
  ],
  imports: [CommonModule, HeaderComponent,
    FooterComponent,
    TruncatePipe]
})
export class SharedModule { }
