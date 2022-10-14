import { Component, OnInit } from '@angular/core';
import { ActivationEnd, NavigationStart, Router } from '@angular/router';
import { OnDestroyMixin, untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
import { ToolbarButton } from '../../models/toolbar-button/toolbar-button';
import { RouterSegments } from '../../models/router-segments';
import { ContactUsDialogComponent } from './contact-us-dialog/contact-us-dialog.component';
import { SidenavService } from '../../services/util/sidenav.service';
import { UserMenuComponent } from './user-menu/user-menu.component';

import { Principal } from 'src/app/models/principal/principal';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent extends OnDestroyMixin implements OnInit {

  ToolbarButton = ToolbarButton;
  RouterSegments = RouterSegments;
  tenant: string;
  activeLink: string;

  principalAbbreviation: string;

  constructor(private router: Router, private sidenavService: SidenavService) {
    super();
    this.getActiveLink();
  }

  ngOnInit(): void {
  }

  /**
   * Gets the active link from the router data. Angular provides data to components inside the url tree, in which they are in. Therefore no
   * data is returned if we simply inject an instance of ActivatedRoute in components outside that tree (for instance the toolbar
   * component). We need to traverse all events and find the one with available activeLink data.
   *
   * https://github.com/angular/angular/issues/11812
   */
  private getActiveLink(): void {
    this.router.events
        .pipe(untilComponentDestroyed(this))
        .subscribe((event: any) => {
          if (event instanceof NavigationStart) {
            // reset upon new navigation to allow the value of activeLink to change
            this.activeLink = null;
          } else if (event instanceof ActivationEnd && event?.snapshot?.data.activeLink) {
            this.activeLink = event.snapshot.data.activeLink;
          }
        });
  }

  openContactUsForm(): void {
    this.sidenavService.openInLeftSidenav(ContactUsDialogComponent);
  }

  private getNameAbbreviation(principal: Principal): string {
    // Does a possibility to not have first and last name exist?
    return principal?.attributes?.given_name.substr(0, 1).toUpperCase()
      + principal?.attributes?.family_name.substr(0, 1).toUpperCase();
  }

  openDeployInstance(): void {
     this.sidenavService.openInLeftSidenav(UserMenuComponent)
  }
}
