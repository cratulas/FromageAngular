import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AdminComponent } from './pages/admin/admin.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { OrderTrackingComponent } from './pages/order-tracking/order-tracking.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'recover-password', component: RecoverPasswordComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'reviews', component: ReviewsComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'order-tracking/:id', component: OrderTrackingComponent },
    { path: '**', redirectTo: '' }

];