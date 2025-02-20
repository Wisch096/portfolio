import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() themeChanged = new EventEmitter<boolean>();

  onThemeChanged(isDarkMode: boolean) {
    this.themeChanged.emit(isDarkMode); 
  }
}