import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-under-construction',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss'],
})
export class UnderConstructionComponent implements OnInit {
  countdownMessage: string = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Solo ejecuta la lógica si está en el navegador
      this.startCountdown();
    }
  }

  startCountdown(): void {
    const targetDate = new Date().getTime() + 5 * 24 * 60 * 60 * 1000; // 5 días desde ahora

    setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        this.countdownMessage = '¡Ya estamos listos!';
      } else {
        this.countdownMessage = `Lanzamiento en: ${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
    }, 1000);
  }
}
