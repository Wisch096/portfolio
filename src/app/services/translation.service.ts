import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private currentLanguage: string;

  constructor(private translate: TranslateService) {
    this.currentLanguage = localStorage.getItem('userLanguage') || 'pt-BR';
    this.translate.setDefaultLang(this.currentLanguage);
    this.translate.use(this.currentLanguage); 
  }

  changeLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language); 
    localStorage.setItem('userLanguage', language);
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }
}