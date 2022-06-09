import { LightningElement } from 'lwc';

export default class AddStdLookupFieldComponent extends LightningElement {
    selectedAccount;

    handleAccountSelection(event){
        this.selectedAccount = event.target.value;
    }
}