import { Component, ChangeDetectorRef } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isDarkMode = false;
  isMobile: boolean;

  constructor(
    private themeService: ThemeService,
    private cdr: ChangeDetectorRef,
    private deviceService: DeviceService
  ) {
    this.themeService.isDarkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
      this.cdr.detectChanges(); 
    });
    this.isMobile = this.deviceService.isMobile;
  }
}