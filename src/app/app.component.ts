import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { passwordStrengthValidator } from './validators/password-strength-validator';
import { confirmPasswordValidator } from './validators/password-match-validator';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    formGroup: FormGroup = null;

    confirmPasswordMessage = 'The passwords do not match.';
    invalidPasswordMessage = 'Must contain at least 1 number, 1 uppercase letter, 1 lowercase letter and at least 8 characters.';

    constructor(private _formBuilder: FormBuilder) {

    }

    ngOnInit() {
        const passwordControl = this._formBuilder.control({
            disabled: false,
            value: null
        }, [Validators.required, Validators.minLength(8), passwordStrengthValidator()]);

        const confirmPasswordControl = this._formBuilder.control({
            disabled: false,
            value: null
        }, [Validators.required, Validators.minLength(8), confirmPasswordValidator(passwordControl)]);

        this.formGroup = this._formBuilder.group({
            confirm: confirmPasswordControl,
            password: passwordControl
        });
    }
}
