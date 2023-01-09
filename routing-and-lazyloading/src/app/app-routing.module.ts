import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: '',
    component: HomeComponent
  },
  // {
  //   path:'orders',
  //   loadChildren:()=> import('./order/order.module').then(m=>m.OrderModule)
  // },
  {
    path:'notfound',
    component:NotFoundComponent
  },
  {
    path:'**',
    redirectTo:'notfound'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//,{useHash:true}
  exports: [RouterModule]
})
export class AppRoutingModule { }
