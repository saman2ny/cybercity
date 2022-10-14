import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/models/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year: string;

  Constants = Constants;

  constructor() { }

  ngOnInit(): void {
    this.year = new Date().getFullYear().toString();
  }

}
