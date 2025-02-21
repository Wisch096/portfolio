import { ChangeDetectorRef, Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
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
