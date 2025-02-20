import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.css']
})
export class ToggleSwitchComponent {

  @Input() checked = false; 
  @Output() checkedChange = new EventEmitter<boolean>(); 

  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked); 
  }
}