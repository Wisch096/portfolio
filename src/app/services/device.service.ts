import { Injectable, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  isMobile: boolean = window.innerWidth < 768;

  constructor() {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }
}
