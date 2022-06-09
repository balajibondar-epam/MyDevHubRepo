import { LightningElement,api } from 'lwc';

export default class CustomParentComponent extends LightningElement {
   @api parentMessageText='parent message text'; 
   message = 'none received (yet)';
        handleClick(event){
            console.log('@@@handleClick called.');
            //this.template.querySelector('lightning-input').value =  this.name;
            //this.template.querySelector('.div').textContent
            this.template.querySelector('c-custom-child-component').handleStatusUpdate();
        }
        //call method from child event
        handleQuoteProcessing(){
            console.log('@@@ handleQuoteProcessing called.');
        }
       
}