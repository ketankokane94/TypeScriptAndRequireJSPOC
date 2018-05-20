import {IcustomValidator} from './IcustomValidator';
import {RequestInstanceVM} from './RequestInstancVm';

export class Validator implements IcustomValidator {
    name:string = 'YourValidator';
    Validate(requestData :RequestInstanceVM) {
        console.log('Ignore  '+this.name + ' is getting called');     
        console.log('Validation Successfull');
        return this.name + "'s result";
    }
}

