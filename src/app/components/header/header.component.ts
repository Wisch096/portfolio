import { Component, EventEmitter, Output } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() themeChanged = new EventEmitter<boolean>();

  constructor(private translationService: TranslationService) {
  }

  onThemeChanged(isDarkMode: boolean) {
    this.themeChanged.emit(isDarkMode); 
  }

  changeLanguage(language: string) {
    this.translationService.changeLanguage(language);
  }
}