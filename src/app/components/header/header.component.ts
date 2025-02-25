import { Component, EventEmitter, Output } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() themeChanged = new EventEmitter<boolean>();
  isEnglish = false; 
  isMobile: boolean;
  isMenuOpen: boolean = false; 

  constructor(private translationService: TranslationService, private deviceService: DeviceService) {
    this.isMobile = this.deviceService.isMobile;
   }

  onThemeChanged(isDarkMode: boolean) {
    this.themeChanged.emit(isDarkMode); 
  }

  onToggleChanged(isChecked: boolean) {
    this.isEnglish = isChecked;
    let language = isChecked ? 'pt-BR' : 'en-US';
    this.translationService.changeLanguage(language);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
}