import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';
import { TranslationService } from 'src/app/services/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() themeChanged = new EventEmitter<boolean>();
  isEnglish = false; 
  isMobile: boolean = false;
  isMenuOpen: boolean = false; 
  private subscription!: Subscription;

  constructor(
    private translationService: TranslationService,
    private deviceService: DeviceService
  ) {}

  ngOnInit(): void {
    this.subscription = this.deviceService.isMobile$.subscribe((isMobile) => {
      this.isMobile = isMobile;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
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
