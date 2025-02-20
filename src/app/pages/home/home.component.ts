import { Component, ChangeDetectorRef } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isDarkMode = false;

  constructor(
    private themeService: ThemeService,
    private cdr: ChangeDetectorRef
  ) {
    this.themeService.isDarkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
      this.cdr.detectChanges(); 
    });
  }
}