import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import {CatalogComponent} from './catalog/catalog.component';
import {ProductComponent} from './product/product.component';


const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: ':id', component: ProductComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,CatalogComponent, ProductComponent
  ]
})
export class ProductsModule {}
