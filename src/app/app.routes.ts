import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing_page/landing-page.component';
import { ServiceMeasureComponent } from './components/service-measure/service-measure.component';
// import { LandingPageComponent } from './pages/landing-page/landing-page.component';
// import { ServicesComponent } from './pages/services/services.component';
// import { PortfolioComponent } from './pages/portfolio/portfolio.component';
// import { BlogComponent } from './pages/blog/blog.component';
// import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'services', component: ServiceMeasureComponent },
//   { path: 'portfolio', component: PortfolioComponent },
//   { path: 'blog', component: BlogComponent },
//   { path: 'contact', component: ContactComponent },
];
