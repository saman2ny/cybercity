import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnDestroyMixin } from '@w11k/ngx-componentdestroyed';
import { SidenavService } from 'src/app/services/util/sidenav.service';

@Component({
  selector: 'app-invite-users',
  templateUrl: './invite-users.component.html',
  styleUrls: ['./invite-users.component.scss']
})
export class InviteUsersComponent extends OnDestroyMixin implements OnInit {

  inviteMultipleUser: boolean;
  inviteUserByLink: boolean;
  inviteUser = true;
  constructor(public sidenavService: SidenavService) {
    super();
  }

  ngOnInit(): void {
  }

  InviteLink(): void {
    this.inviteUser = false;
    this.inviteUserByLink = true;
    this.inviteMultipleUser = false;
  }

  InviteEmail(): void {
    this.inviteUser = true;
    this.inviteUserByLink = false;
    this.inviteMultipleUser = false;
  }

  InviteMultipleUser(): void {
    this.inviteUser = false;
    this.inviteUserByLink = false;
    this.inviteMultipleUser = true;
  }


}

