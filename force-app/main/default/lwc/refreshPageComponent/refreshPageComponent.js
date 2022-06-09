import { LightningElement,api,track,wire } from 'lwc';
import updateAccount from '@salesforce/apex/RefreshPageController.updateAccount';
//import getContactList from '@salesforce/apex/RefreshPageController.getContactList';
export default class RefreshPageComponent extends LightningElement {
    @track selectedName;
    @api recordId='0015g00000JlgUyAAJ';
    @track updatedaccountrecord;
    //@track errorMessage;
    //@track contacts;
    @track error;

    handleRefreshComponent(event){
        console.log('@@@ handleRefreshComponent called.');
        
        this.selectedName = this.template.querySelector('lightning-input[data-id=username]').value;
        updateAccount({accountId:this.recordId , selectedName:this.selectedName})
        .then(result => {
            this.updatedaccountrecord = result;
        })
        .catch(error => {
            this.error = error;
        });
        //refresh record page to reflect the changes
        eval("$A.get('e.force:refreshView').fire();");
        this.template.querySelector('lightning-input[data-id=username]').value = null;
        console.log(JSON.stringify(this.updatedaccountrecord));
    }
    
    handleRefreshandSaveAccount(event){
        console.log('@@@ handleRefreshandSaveAccount called.');
        this.selectedName = this.template.querySelector('lightning-input[data-id=username]').value;
        updateAccount({accountId:this.recordId , selectedName:this.selectedName})
        .then(result => {
            this.updatedaccountrecord = result;
        })
        .catch(error => {
            this.error = error;
        });
        window.location.reload();
        this.template.querySelector('lightning-input[data-id=username]').value = null;
        console.log(JSON.stringify(this.updatedaccountrecord));
    }
}