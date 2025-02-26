import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { DeviceService } from 'src/app/services/device.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  isDarkMode = false;
  isMobile: boolean = false;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private themeService: ThemeService,
    private cdr: ChangeDetectorRef,
    private deviceService: DeviceService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.themeService.isDarkMode$.subscribe((isDarkMode) => {
        this.isDarkMode = isDarkMode;
        this.cdr.detectChanges();
      })
    );

    this.subscriptions.add(
      this.deviceService.isMobile$.subscribe((isMobile) => {
        this.isMobile = isMobile;
        this.cdr.detectChanges();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
