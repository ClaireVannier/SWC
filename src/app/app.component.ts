import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LandingPageComponent } from "./components/landing_page/landing-page.component";
import { ServiceMeasureComponent } from './components/service-measure/service-measure.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, LandingPageComponent, ServiceMeasureComponent, HttpClientModule]
})
export class AppComponent {
  title = 'SerenityWebCreations';
}
