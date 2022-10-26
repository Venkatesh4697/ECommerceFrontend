export class User {
    emailId:string;
    firstName:string;
    lastName:string;
    password:string;
    repassword:string;
    phoneNumber:string;
    houseNumber:string;
    streetName:string;
    city:string;
    state:string;
    pinCode:string;
    
      constructor(emailId: string, firstName: string, lastName: string, password: string, repassword: string, phoneNumber:string,houseNumber: string, streetName:string, city: string, state: string, pinCode: string)
    {
      this.emailId=emailId;
    this.firstName=firstName;
    this.lastName=lastName;
    this.password=password;
    this.repassword=repassword;
      this.phoneNumber = phoneNumber;
    this.houseNumber = houseNumber;
    this.streetName=streetName;
      this.city = city;
      this.state  = state;
      this.pinCode = pinCode;
    }
    }
    