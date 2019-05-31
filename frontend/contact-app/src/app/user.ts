import { stringify } from '@angular/compiler/src/util';

export class User {
    
    token: string

    constructor(
        public firstName: string,
        public lastName: string,
        public username: string,
        public password: string,
      ) {  }

}
