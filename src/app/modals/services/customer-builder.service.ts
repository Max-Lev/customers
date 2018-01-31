import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerBuilderService {

  constructor() { };

  getRegistrationData(registrationData: Array<FormControl>) {

    Object.keys(registrationData).map(key => {
      const dataType = registrationData[key];
      console.log(typeof dataType)
    });
    
  };

}
