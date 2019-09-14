import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StocksComponent } from './stocks/stocks.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { SystemComponent } from './system/system.component';
import { ViewStockComponent } from './stocks/view-stock/view-stock.component';
import { AddStockComponent } from './stocks/add-stock/add-stock.component';
import { SettingComponent } from './superadmin/setting/setting.component';
import { CreateUserComponent } from './superadmin/create-user/create-user.component';
import { UsersComponent } from './superadmin/users/users.component';
import { ManageUserComponent } from './superadmin/manage-user/manage-user.component';
import { UserComponent } from './superadmin/user/user.component';
import { SettingComponent as StockSettingComponent} from './stocks/setting/setting.component';


const routes: Routes = [
  {
    path: 'master/setting',
    component : SettingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'master/users',
    component : UsersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'master/user/:id',
    component : UserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'master/create-user',
    component : CreateUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'master/manage-user',
    component : ManageUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'stocks',
    component : StocksComponent,
  },
  {
    path: 'view-stocks',
    component : ViewStockComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'view-stocks/setting',
    component : StockSettingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-stock',
    component : AddStockComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'transactions',
    component: TransactionsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'system',
    component : SystemComponent,
    canActivate : [AuthGuard]
  },
  {
    path: '',
    component: SystemComponent,
    canActivate : [AuthGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
