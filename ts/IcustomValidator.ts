import {RequestInstanceVM} from './RequestInstancVm';

export interface IcustomValidator {
    Validate (requestData: RequestInstanceVM) :string;  
}