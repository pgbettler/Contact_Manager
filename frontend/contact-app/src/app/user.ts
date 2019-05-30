import { stringify } from '@angular/compiler/src/util';

export class User {
    
    token: string

    constructor(
        public name: string,
        public username: string,
        public password: string,
      ) {  }

}
