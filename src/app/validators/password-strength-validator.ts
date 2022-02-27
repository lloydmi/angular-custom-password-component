import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const passwordRegularExpression: RegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

export function passwordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (!control?.value) {
            return null;
        }

        if (!passwordRegularExpression.test(control.value)) {
            return {
                passwordStrength: true
            }
        }

        return null;
    }
}
