import {provideRouter, Routes} from '@angular/router';



export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./features/order/order.module').then(m => m.OrderModule)
  }
];

export const appConfig = {
  providers: [

    provideRouter(routes)
  ]
};
