import { LightningElement, track } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class ApexCallDemoComponent extends LightningElement {
    @track contacts;
    @track error;
    @track searchKey='test key';

    handleApexImperativeCall(event){
        console.log('@@@ handleApexImperativeCall called.');
        //call Apex method imperatively
        getContactList({searchKey:this.searchKey})
        .then(result => {
            this.contacts = result;
        })
        .catch(error => {
            this.error = error;
        });
        console.log(JSON.stringify(this.contacts));
        //let contactList = JSON.parse(JSON.stringify(this.contacts))
        //console.log(contactList) 
        //console.log(Object.keys(this.contacts.data[0]));
    }
}