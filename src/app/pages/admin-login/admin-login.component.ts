import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarAdmComponent } from '../../components/adm/navbar-adm/navbar-adm.component';
import { FooterAdmComponent } from '../../components/adm/footer-adm/footer-adm.component';
import { AdminService } from '../../services/admin.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [NavbarAdmComponent, FooterAdmComponent, FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  user = '';
  password = '';
  errorMsg = '';

  constructor(private router: Router, private adminService: AdminService) { }

  entrar() {
    this.router.navigate(['/adm/menu']);
  }

  onSubmit() {
    this.errorMsg = '';
    this.adminService.login(this.user, this.password)
      .subscribe({
        next: ok => {
          if (ok) {
            // salva flag simples e redireciona
            localStorage.setItem('isAdmin', '1');
            this.router.navigate(['/adm/menu']);
          } else {
            this.errorMsg = 'Credenciais incorretas';
          }
        },
        error: () => {
          this.errorMsg = 'Erro ao conectar com o servidor';
        }
      })
  }

}

