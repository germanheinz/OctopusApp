import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { PagesComponent } from './pages.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

    {  path: '',     component: PagesComponent,
        children: [
            {  path: '',     component: HomeComponent  },
            {  path: 'home', component: HomeComponent  },
            {  path: 'user', component: UserComponent  },
        ]
    },
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
