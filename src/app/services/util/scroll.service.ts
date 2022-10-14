import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

class ScrollSettings {
  position?: 'up' | 'down';
  scrollBehaviour?: 'smooth' | 'normal';
}

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private scrollSubject = new Subject<Event>();
  private lockScrollElement: HTMLElement;
  private smoothScrolling: boolean;
  private smoothScrollingResetTimeout;
  private scrollableContainer: HTMLElement;

  constructor() {
    this.prepareScrollLockElement();
  }

  getScrollObservable(): Observable<Event> {
    return this.scrollSubject.asObservable();
  }

  publishScrollEvent(value: Event): void {
    // Pass scroll events only initiated by user.
    // Smooth scrolling activates many scroll events from Scroll Service that should not be processed.
    if (!this.smoothScrolling) {
      this.scrollSubject.next(value);
    }
  }

  scrollTo(scrollOffset: number, settings?: ScrollSettings) {
    if (settings && settings.scrollBehaviour === 'smooth') {
      this.activateSmoothScrolling();
      this.scrollableContainer.style.scrollBehavior = 'smooth';
    } else {
      this.scrollableContainer.style.scrollBehavior = 'unset';
    }

    if (settings && settings.position === 'down') {
      this.scrollableContainer.scrollTop = this.scrollableContainer.scrollHeight - scrollOffset;
    } else {
      this.scrollableContainer.scrollTop = scrollOffset;
    }
  }

  scrollToElement(element, settings?: ScrollSettings, padding?: number) {
    if (!padding) {
      padding = 0;
    }
    if (element.nativeElement) {
      this.scrollTo(element.nativeElement.offsetTop - padding, settings);
    } else {
      this.scrollTo(element.offsetTop - padding, settings);
    }
  }

  disableScroll() {
    this.scrollableContainer.parentElement.insertBefore(this.lockScrollElement, this.scrollableContainer);
  }

  enableScroll() {
    this.lockScrollElement.remove();
  }

  setScrollableContainer(container: HTMLElement) {
    this.scrollableContainer = container;
  }

  private prepareScrollLockElement() {
    this.lockScrollElement = document.createElement('div');
    this.lockScrollElement.id = 'scroll-lock';
    this.lockScrollElement.style.width = '100%';
    this.lockScrollElement.style.height = '100%';
    this.lockScrollElement.style.backgroundColor = 'transparent';
    this.lockScrollElement.style.zIndex = '1000';
    this.lockScrollElement.style.position = 'absolute';
  }

  private activateSmoothScrolling() {
    this.smoothScrolling = true;
    // Clearing timeout so we do not set smooth scrolling to false from a previous click.
    clearTimeout(this.smoothScrollingResetTimeout);
    this.smoothScrollingResetTimeout = setTimeout(() => this.smoothScrolling = false, 1000);
  }
}
