import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function confirmPasswordValidator(passwordControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (passwordControl?.value !== control?.value) {
            return {
                passwordMismatch: true
            }
        }

        return null;
    }
}
