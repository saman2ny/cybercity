import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { translate } from '@ngneat/transloco';
import { animate, style, transition, trigger } from '@angular/animations';
import { OnDestroyMixin, untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  animations: [
    trigger('error', [
      transition(':enter', [
        style({transform: 'translateY(-10px)'}),
        animate('100ms ease-out', style({transform: 'none'}))
      ])
    ])
  ]
})
export class ErrorComponent extends OnDestroyMixin implements OnInit {
  errorKey: string;

  @Input() control: AbstractControl;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.errorKey = this.getFirstErrorKey();
    this.control.statusChanges
      .pipe(untilComponentDestroyed(this))
      .subscribe(newStatus => {
        if (newStatus === 'INVALID') {
          this.errorKey = this.getFirstErrorKey();
        }
      });
  }

  private getFirstErrorKey(): string {
    return this.control.errors ? Object.keys(this.control.errors)[0] : null;
  }
}
