import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarAdmComponent } from '../../components/adm/navbar-adm/navbar-adm.component';
import { FooterAdmComponent } from '../../components/adm/footer-adm/footer-adm.component';
import { AdminService } from '../../services/admin.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [NavbarAdmComponent, FooterAdmComponent, FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  user = '';
  password = '';
  errorMsg = '';
  formSubmitted = false;

  constructor(private router: Router, private adminService: AdminService) { }

  entrar() {
    this.router.navigate(['/adm/menu']);
  }

  onSubmit() {
    this.formSubmitted = true;

    if (!this.user || !this.password) {
      this.errorMsg = 'Preencha todos os campos.';
      return;
    }

    this.errorMsg = '';

    this.adminService.login(this.user, this.password).subscribe({
      next: ok => {
        if (ok) {
          localStorage.setItem('isAdmin', '1');
          this.router.navigate(['/adm/menu']);
        } else {
          this.errorMsg = 'Credenciais incorretas';
        }
      },
      error: (e) => {
        this.errorMsg = e.error.message ?? 'Erro ao conectar com o servidor';
      }
    });
  }


}

