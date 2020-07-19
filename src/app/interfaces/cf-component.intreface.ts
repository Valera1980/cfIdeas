import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
export interface ICustomFieldComponent {
    form: FormGroup;
    buildForm: (domPlace: any) => Observable<FormGroup>;
}