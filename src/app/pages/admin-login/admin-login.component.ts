import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarAdmComponent } from '../../components/adm/navbar-adm/navbar-adm.component';
import { FooterAdmComponent } from '../../components/adm/footer-adm/footer-adm.component';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [NavbarAdmComponent, FooterAdmComponent],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  // Cria uma variável privada chamada router e injeta (TS faz isso automaticamente) a instância do serviço Router nela.
  constructor(private router: Router) { }

  entrar() {
    this.router.navigate(['/adm/menu']);
  }

}

