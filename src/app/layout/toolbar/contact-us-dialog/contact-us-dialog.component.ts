import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../../services/api/contact.service';
import { OnDestroyMixin, untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
import { animate, style, transition, trigger } from '@angular/animations';
import { FormUtilService } from '../../../services/util/form-util.service';
import { SidenavService } from '../../../services/util/sidenav.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-contact-us-dialog',
  templateUrl: './contact-us-dialog.component.html',
  styleUrls: ['./contact-us-dialog.component.scss'],
  animations: [
    trigger('successMessage', [
      transition(':enter', [
        style({transform: 'translateX(200px)'}),
        animate('200ms ease-out', style({transform: 'none'}))
      ])
    ])
  ]
})
export class ContactUsDialogComponent extends OnDestroyMixin implements OnInit {
  contactUsForm: UntypedFormGroup;
  sent: boolean;
  typedMessage = '';
  displayTooltip = false;
  messageSentTry = false;

  constructor(public sidenavService: SidenavService, private formBuilder: UntypedFormBuilder, private contactService: ContactService,
              private authService: AuthService) {
    super();
  }

  ngOnInit(): void {
    this.buildForm();
  }

  copyText(): void {
    const textToCopy = document.getElementById('text-content') as HTMLInputElement;
    textToCopy.select();
    textToCopy.setSelectionRange(0, 99999);
    document.execCommand('copy');
    this.displayTooltip = true;
    setTimeout(() => {
      this.displayTooltip = false;
    }, 5000);
  }

  sendMessage(): void {
    if (!FormUtilService.validateForm(this.contactUsForm)) {
      return;
    }
    this.typedMessage = this.contactUsForm.get('message').value;
    this.contactService.sendMessage(this.contactUsForm.getRawValue())
      .pipe(untilComponentDestroyed(this))
      .subscribe(() => this.sent = true,
        (error) => {
          this.sent = false;
        }
      );
    this.messageSentTry = true;
  }

  private buildForm(): void {
    const userInfo = this.authService.principal;
    this.contactUsForm = this.formBuilder.group({
      name: [userInfo.attributes.name, Validators.required],
      email: [userInfo.attributes.email, Validators.required],
      company: [userInfo.provider, Validators.required],
      message: ['', Validators.required],
    });
  }

}
