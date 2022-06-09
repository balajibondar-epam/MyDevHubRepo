import { createRecordInputFilteredByEditedFields } from 'lightning/uiRecordApi';
import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class ParentComponent extends LightningElement {
    //childcompnentvalue = this.template.querySelector('c-child-component');
    localContactList;
    contactList = [
        {
            Id: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
        },
        {
            Id: 2,
            Name: 'Michael Jones',
            Title: 'VP of Sales',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO',
        },
    ];
    handleClick(event) {
        console.log('@@@@@ handleClick called.');
        this.clickedButtonLabel = event.target.label;
        this.localContactList = this.contactsList;
    }

}