import {IcustomValidator} from './IcustomValidator';
import {RequestInstanceVM, InstanceFields, InstanceFieldVM} from './RequestInstancVm';

export class Validator implements IcustomValidator {
    name:string = 'MyValidator';
    Validate(requestData: RequestInstanceVM) {
        console.log('Ignore  '+this.name + ' is getting called');
        let documentDTO : InstanceFields = requestData.instanceFields;
        let id1 : InstanceFieldVM[] = documentDTO['DTFGUID1'];
        let id2 : InstanceFieldVM[] = documentDTO['DTFGUID2'];
        if (id1[0].Value === id2[0].Value){
            console.log("Validation Successfull");
        }
        return this.name + "'s result";
    }
}

