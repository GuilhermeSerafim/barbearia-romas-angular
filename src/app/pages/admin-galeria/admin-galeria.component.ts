import { Component } from '@angular/core';
import { FooterAdmComponent } from "../../components/adm/footer-adm/footer-adm.component";
import { NavbarAdmComponent } from "../../components/adm/navbar-adm/navbar-adm.component";
import { CardGaleriaAdmComponent } from "../../components/card-galeria-adm/card-galeria-adm.component";

@Component({
  selector: 'app-admin-galeria',
  standalone: true,
  imports: [FooterAdmComponent, NavbarAdmComponent, CardGaleriaAdmComponent],
  templateUrl: './admin-galeria.component.html',
  styleUrl: './admin-galeria.component.css'
})
export class AdminGaleriaComponent {
  listClient = [
    {
      comment: "Sai daqui me sentindo outro cara, corte alinhado e barba na régua.",
      name: "João S",
      img: "/cliente1.png",
      path: "/cliente1.png",
      alt: "Cliente João"
    },
    {
      comment: "O corte ficou simplesmente perfeito! O Romário manda muito na tesoura, super recomendo!",
      name: "Cliente E",
      img: "/cliente2.png",
      alt: "Cliente Evelyn"
    },
    {
      comment: "Levei meu filho pra cortar o cabelo e fiquei impressionado com o cuidado e paciência.",
      name: "Letícia M",
      img: "/cliente3.png",
      alt: "Cliente Letícia"
    },
  ]
  deleteCliente(i: number) {
    this.listClient.splice(i, 1);
  }
}
