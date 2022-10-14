import { Component, OnInit } from '@angular/core';
import { Principal } from 'src/app/models/principal/principal';
import { RouterSegments } from 'src/app/models/router-segments';
import { ToolbarButton } from 'src/app/models/toolbar-button/toolbar-button';
import { SidenavService } from 'src/app/services/util/sidenav.service';
import { ToolbarComponent } from '../toolbar.component';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  ToolbarButton = ToolbarButton;
  principalAbbreviation: string;
  RouterSegments = RouterSegments;
  activeLink: string;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
    // this.principalAbbreviation = this.getNameAbbreviation();
  }

  logout(): void {
    // this.authService.logout();
  }

  private getNameAbbreviation(principal: Principal): string {
    // Does a possibility to not have first and last name exist?
    return principal?.attributes?.given_name.substr(0, 1).toUpperCase()
      + principal?.attributes?.family_name.substr(0, 1).toUpperCase();
  }



}
