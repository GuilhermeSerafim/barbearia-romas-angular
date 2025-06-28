import { Routes } from '@angular/router';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AdminMenuComponent } from './pages/admin-menu/admin-menu.component';
import { AdminAgendamentosComponent } from './pages/admin-agendamentos/admin-agendamentos.component';
import { AdminGaleriaComponent } from './pages/admin-galeria/admin-galeria.component';
import { AuthGuard } from './guards/auth.guard';

// Um array de configurações de rota, onde cada objeto diz “quando a URL for X, use o componente Y
export const routes: Routes = [
    { path: '', component: LandingPageComponent },    // sua landing page (ajustar nome se for outro)
    { path: 'adm/login', component: AdminLoginComponent },
    { path: 'adm/menu', component: AdminMenuComponent },
    { path: 'adm/agendamentos', component: AdminAgendamentosComponent },
    { path: 'adm/galeria', component: AdminGaleriaComponent },
];
