import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
export interface ICustomFieldCompoent {
    form: FormGroup;
    buildForm: (domPlace: any) => Observable<FormGroup>;
}