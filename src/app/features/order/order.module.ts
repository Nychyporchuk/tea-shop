import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderComponent} from './order.component';
import {RouterModule,Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: OrderComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrderComponent,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class OrderModule { }
