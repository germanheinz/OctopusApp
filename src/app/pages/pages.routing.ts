import { Routes, RouterModule, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';


import { PagesComponent } from './pages.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../guards/auth.guard';
import { DetailComponent } from './detail/detail.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [

    {  path: 'products', component: PagesComponent,
        canActivate: [ AuthGuard ],
        children: [
            {  path: '',     component: HomeComponent  },
            {  path: 'products', component: HomeComponent  },
            {  path: 'user/:id', component: UserComponent  },
            {  path: 'order', component: OrderComponent },
        ]
    },
    {  path: 'product', component: PagesComponent,
        children: [
            {  path: 'detail/:id', component: DetailComponent },
            {  path: 'payment/:id', component: PaymentComponent  },
        ]
    },
    // {  path: 'order', component: PagesComponent,
    // children: [
    //     {  path: '', component: OrderComponent },
    // ]
    // }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
