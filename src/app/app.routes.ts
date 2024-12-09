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
import { Noticia1Component } from './pages/noticia1/noticia1.component';
import { Noticia2Component } from './pages/noticia2/noticia2.component';
import { Noticia3Component } from './pages/noticia3/noticia3.component';
import { OrderTrackingComponent } from './pages/order-tracking/order-tracking.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductManagementComponent } from './pages/product-management/product-management.component';



export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'noticia1', component: UnderConstructionComponent },
    { path: 'noticia2', component: Noticia2Component },
    { path: 'noticia3', component: Noticia3Component },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'recover-password', component: RecoverPasswordComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'reviews', component: ReviewsComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'order-tracking/:id', component: OrderTrackingComponent },
    { path: 'cart', component: CartComponent },
    {
        path: 'products',
        component: ProductManagementComponent,
        runGuardsAndResolvers: 'always', // Asegura recarga de la ruta
    },
    { path: '**', redirectTo: '' }

];