import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css']
})
export class ThemeToggleComponent {
  @Output() themeChanged = new EventEmitter<boolean>(); // Emite um booleano
  isDarkMode = false;

  toggleDarkMode(event: Event) {
    const target = event.target as HTMLInputElement; // Captura o estado do checkbox
    this.isDarkMode = target.checked; // Atualiza o estado do modo escuro
    this.themeChanged.emit(this.isDarkMode); // Emite o valor booleano
  }
}