import { Component, OnInit } from '@angular/core';
import { DynTable, ItemsGroup, StatusType } from 'src/app/models/user-table';
import { RouterSegments } from 'src/app/models/router-segments';
import { OnDestroyMixin, untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
import { UsersService } from 'src/app/services/api/users.service';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util/util.service';
import { ErrorPageService } from 'src/app/services/util/error-page.service';
import { MatDialogRef } from '@angular/material/dialog';
import { translate } from '@ngneat/transloco';
import { SidenavService } from 'src/app/services/util/sidenav.service';
import { InviteUsersComponent } from './invite-users/invite-users.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends OnDestroyMixin implements OnInit {
  // users!: DynTable;
  RouterSegments = RouterSegments;
  filterSubscription!: Subscription;
  dataLoading!: boolean;
  itemsGroup!: ItemsGroup;
  statusType = StatusType;
  status!: string;
  // StatusType = StatusType;

  pageSize = 5;
  currentPage = 1;
  pageSizeOptions = [5, 10, 25, 100];
  totalRows!: number;
  pageDetail!: { page: any; limit: any };

  displayedColumns: string[] = ['People', 'Involed', 'Role'];
  users: any = [];

  constructor(
    private router: Router, private usersService: UsersService, private common: UtilService,
    private errorPageService: ErrorPageService,
    private sidenaveService: SidenavService) {
    super();
  }

  ngOnInit(): void {
    this.status = this.statusType.ADD;
    this.loadUsers();
  }

  loadAllDetail(event?: number): void {
    this.loadUsers(event);
  }

  loadUsers(event?: any): void {
    this.dataLoading = true;
    this.pageDetail = event ? { page: event.currentPage, limit: event.pageSize } : { page: this.currentPage, limit: this.pageSize };
    // if (this.filterSubscription) {
    //   this.filterSubscription.unsubscribe();
    // }
    // this.filterSubscription = this.usersService.getUserDetails(this.pageDetail)
    //   .pipe(
    //     finalize(() => {
    //       this.dataLoading = false;
    //     }),
    //     untilComponentDestroyed(this))
    //   .subscribe(users => {
    //     if (users) {
    //       this.itemsGroup = users;
    //       this.totalRows = this.itemsGroup.count;
    //       this.users = {
    //         columns: [
    //           {
    //             columnDef: 'id'
    //           },
    //           {
    //             columnDef: 'users'
    //           },
    //           {
    //             columnDef: 'involved_in'
    //           },
    //           {
    //             columnDef: 'role'
    //           }
    //         ],
    //         data: this.itemsGroup.items
    //       };

    //     } else {
    //       this.errorPageService.show404Page();
    //     }

    //   }, error => this.errorPageService.show404Page());


    this.users = [
      {Position: 1, People: 'Hydrogen', Involed: 1.0079},
      {Position: 2, People: 'Hydrogen', Involed: 2.0079},
      {Position: 3, People: 'Hydrogen', Involed: 3.0079},
      {Position: 4, People: 'Hydrogen', Involed: 4.0079},
      {Position: 5, People: 'Hydrogen', Involed: 5.0079},
      {Position: 6, People: 'Hydrogen', Involed: 6.0079}
    ];

  }

  invite(): void {
    this.sidenaveService.openInLeftSidenav(InviteUsersComponent);
  }
}
