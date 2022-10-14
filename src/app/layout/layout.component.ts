import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { SidenavService } from '../services/util/sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';
import { ScrollService } from '../services/util/scroll.service';
import { NavigationEnd, Router } from '@angular/router';
import { OnDestroyMixin, untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
import { TourService } from '../services/util/tour.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent extends OnDestroyMixin implements OnInit, AfterViewInit {

  @ViewChild('leftSidenav', { static: true }) private leftSidenav: MatSidenav;
  @ViewChild('container', { static: true, read: ViewContainerRef }) private viewContainerRef: ViewContainerRef;
  @ViewChild('scrollableContainer') private scrollableContainer;

  constructor(public sidenavService: SidenavService, private scrollService: ScrollService,
    private router: Router, private tourService: TourService) {
    super();
  }

  ngOnInit(): void {
    this.sidenavService.setLeftSidenav(this.leftSidenav);
    this.sidenavService.setViewContainerRef(this.viewContainerRef);
    this.addNavigationHandler();
  }

  ngAfterViewInit(): void {
    this.scrollService.setScrollableContainer(this.scrollableContainer.elementRef.nativeElement);
  }


  scroll($event: Event): void {
    this.scrollService.publishScrollEvent($event);
  }


  private addNavigationHandler(): void {
    this.router.events
      .pipe(untilComponentDestroyed(this))
      .subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
        this.sidenavService.closeLeftSidenav();
        this.scrollService.scrollTo(0);
        this.tourService.hideTour();
      });
  }

}
