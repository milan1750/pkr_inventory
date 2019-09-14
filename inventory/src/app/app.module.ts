import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { StocksComponent } from './stocks/stocks.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { AuthService } from './auth.service';
import { StocksService } from './services/stocks.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { SystemComponent } from './system/system.component';
import { MatMenuModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { ViewStockComponent } from './stocks/view-stock/view-stock.component';
import { AddStockComponent } from './stocks/add-stock/add-stock.component';
import { SettingComponent } from './superadmin/setting/setting.component';
import { CreateUserComponent } from './superadmin/create-user/create-user.component';
import { UsersComponent } from './superadmin/users/users.component';
import { CreateUserService } from './superadmin/services/create-user.service';
import { ManageUserComponent } from './superadmin/manage-user/manage-user.component';
import { AccessUserService } from './superadmin/services/access-user.service';
import { UserComponent } from './superadmin/user/user.component';
import { SettingComponent as StockSettingComponent } from './stocks/setting/setting.component';
import { QuantityTypeService } from './services/quantity-type.service';
import { CategoryTypeService } from './services/category-type.service';
import { GroupTypeService } from './services/group-type.service';
import { ModelTypeService } from './services/model-type.service';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    StocksComponent,
    TransactionsComponent,
    SystemComponent,
    ViewStockComponent,
    AddStockComponent,
    SettingComponent,
    CreateUserComponent,
    UsersComponent,
    ManageUserComponent,
    UserComponent,
    StockSettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule

  ],
  providers:
  [
    AuthService, StocksService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    CreateUserService, AccessUserService, QuantityTypeService, CategoryTypeService, GroupTypeService, ModelTypeService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
