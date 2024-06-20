import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceMeasureComponent } from '../service-measure/service-measure.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, ServiceMeasureComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
