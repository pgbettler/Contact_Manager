export class Contact {
    
    token: string

    constructor(
        public firstName: string,
        public lastName: string,
        public phoneNumber: string,
        public streetAddress?: string,
        public state?: string
      ) {  }

}
