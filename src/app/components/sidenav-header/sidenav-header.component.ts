import { Component, OnInit, Input } from '@angular/core';
import { SidenavService } from 'src/app/services/util/sidenav.service';

@Component({
  selector: 'app-sidenav-header',
  templateUrl: './sidenav-header.component.html',
  styleUrls: ['./sidenav-header.component.scss']
})
export class SidenavHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;

  constructor(public sidenavService: SidenavService) { }

  ngOnInit(): void {
  }

}
