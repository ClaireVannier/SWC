import { Component, HostListener, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-colored-bars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colored-bars.component.html',
  styleUrls: ['./colored-bars.component.scss']
})
export class ColoredBarsComponent implements OnInit {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      window.addEventListener('scroll', this.onScroll);
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (!this.isBrowser) return;

    const coloredBars = document.querySelector('.colored-bars') as HTMLElement;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop > 80) {
      coloredBars.classList.add('sticky');
    } else {
      coloredBars.classList.remove('sticky');
    }

    if ((documentHeight - scrollTop - windowHeight) < 70) {
      coloredBars.classList.add('sticky-bottom');
    } else {
      coloredBars.classList.remove('sticky-bottom');
    }
  }
}
