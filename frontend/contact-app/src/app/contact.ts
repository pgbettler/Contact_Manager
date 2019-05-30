export class Contact {

    token: string

    constructor(
        public userID: string,
        public firstName: string,
        public lastName: string,
        public phoneNumber: string,
        public emailAddress?: string
      ) {  }

}
