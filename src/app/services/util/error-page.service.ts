import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorPageService {


  constructor(private router: Router) { }

  show404Page(): void {
    this.router.navigate(['/', 'error', '404'], { skipLocationChange: true });
  }
}
