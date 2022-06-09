import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    firstName='';//variable
    lastName='';//variable  
    localfullName = { firstName : 'initFirstName', lastName : '' };
    //this.localfullName.firstName = 'test';
    connectedCallback() {
     console.log('connectedCallback called.');   
    }

    handleChange(event) {
        const field = event.target.name;
        if (field === 'firstName') {
            this.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.lastName = event.target.value;
        }
        
    }

    get fullName() {
        return   `${this.firstName} ${this.lastName}`;
    }

}