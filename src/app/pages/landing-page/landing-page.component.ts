import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HeroComponent } from "../../components/hero/hero.component";
import { GalleryComponent } from "../../components/gallery/gallery.component";
import { LocalizationComponent } from "../../components/localization/localization.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { AboutComponent } from "../../components/about/about.component";
import { ServicesComponent } from '../../components/services/services.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, ServicesComponent, GalleryComponent, LocalizationComponent, FooterComponent, AboutComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
