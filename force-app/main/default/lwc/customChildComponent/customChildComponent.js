import { LightningElement,api } from 'lwc';

export default class CustomChildComponent extends LightningElement {
 @api childMessageText = 'child message text.';

 @api
 handleStatusUpdate(){
     console.log('@@@handleStatusUpdate called.');
     this.childMessageText = this.childMessageText.toUpperCase();
     ////this.childMessageText = 'Public method - called from parent component button click.';
 }
 handleFireEventBtnClick(event){
    console.log('@@@ FireEventHandler called.');
    this.dispatchEvent(new CustomEvent('processquoteinformation'));
 }
}