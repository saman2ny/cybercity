import { Injectable } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, UntypedFormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormUtilService {

  /**
   * Force validation on form group.
   *
   * @param formGroup to be validated
   */
  public static validateForm(formGroup: UntypedFormGroup): boolean {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof UntypedFormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof UntypedFormGroup) {
        return FormUtilService.validateForm(control);
      } else if (control instanceof UntypedFormArray) {
        if (control.controls[0] && control.controls[0] instanceof UntypedFormControl) {
          control.controls.forEach((subControl: UntypedFormControl) => subControl.markAsTouched({onlySelf: true}));
        } else {
          control.controls.forEach((group: UntypedFormGroup) => FormUtilService.validateForm(group));
        }
      }
    });

    return formGroup.valid;
  }
}
