import { Component } from '@angular/core';
import { ColoredBarsComponent } from "../colored-bars/colored-bars.component";

@Component({
    selector: 'app-service-measure',
    standalone: true,
    templateUrl: './service-measure.component.html',
    styleUrl: './service-measure.component.scss',
    imports: [ColoredBarsComponent]
})
export class ServiceMeasureComponent {

}
