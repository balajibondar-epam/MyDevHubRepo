import { LightningElement , wire } from 'lwc';
import getAccountList from '@salesforce/apex/CustomInlineEditDataTableController.getAccountList';
import SystemModstamp from '@salesforce/schema/Account.SystemModstamp';

const columnsList = [
    { label: 'Name', fieldName: 'Name', editable: true },
    { label: 'Industry', fieldName: 'Industry', editable: true }];

export default class CustomInlineEditDataTableComponent extends LightningElement {
    accountList;
    wiredAccountList;
    error;
    columnsList = columnsList;
    selectedRowIdList;

@wire (getAccountList)
wiredAccount( value ) {
    this.wiredAccountList = value; // track the provisioned value
    const { data, error } = value;

    if (data) {
        this.accountList = data;
        this.error = undefined;
    } else if (error) {
        this.error = error;
        this.accountList = undefined;
    }
}

async handleSaveClick(event){
    System.debug('handleSaveClick called:::');

}

handleCancelClick(event){
    System.debug('handleCancelClick called:::');
}




}