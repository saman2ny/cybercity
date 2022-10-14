import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterSegments } from 'src/app/models/router-segments';

@Component({
  selector: 'app-not-found-error',
  templateUrl: './not-found-error.html',
  styleUrls: ['./not-found-error.scss']
})
export class NotFoundErrorComponent implements OnInit {

  RouterSegments = RouterSegments;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBack(): void {
    if (window.history.length > 4) {
      window.history.go(-2);
    }
    else {
      this.router.navigate(['/']);
    }
  }

}
