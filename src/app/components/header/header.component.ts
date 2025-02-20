import { Component, EventEmitter, Output } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() themeChanged = new EventEmitter<boolean>();
  isEnglish = false; 

  constructor(private translationService: TranslationService) {
  }

  onThemeChanged(isDarkMode: boolean) {
    this.themeChanged.emit(isDarkMode); 
  }

  onToggleChanged(isChecked: boolean) {
    this.isEnglish = isChecked;
    const language = isChecked ? 'en-US' : 'pt-BR'; // Define o idioma com base no toggle
    this.translationService.changeLanguage(language);
  }
}