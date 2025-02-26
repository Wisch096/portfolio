import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeviceService implements OnDestroy {
  private destroy$ = new Subject<void>();
  private isMobileSubject = new BehaviorSubject<boolean>(window.innerWidth < 768);
  isMobile$ = this.isMobileSubject.asObservable();

  constructor() {
    this.checkScreenSize();
    fromEvent(window, 'resize')
      .pipe(debounceTime(200), takeUntil(this.destroy$))
      .subscribe(() => this.checkScreenSize());
  }

  private checkScreenSize() {
    const isMobile = window.innerWidth < 768;
    if (this.isMobileSubject.value !== isMobile) {
      this.isMobileSubject.next(isMobile);
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
