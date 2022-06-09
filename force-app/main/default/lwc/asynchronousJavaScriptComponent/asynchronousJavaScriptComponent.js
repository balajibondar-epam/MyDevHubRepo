import { LightningElement,track } from 'lwc';
import getContactDetails from '@salesforce/apex/AsynchronousJavaScriptController.getContactDetails';
import getTextMethod1 from '@salesforce/apex/AsynchronousJavaScriptController.getTextMethod1';
import getTextMethod2 from '@salesforce/apex/AsynchronousJavaScriptController.getTextMethod2';
import getTextMethod3 from '@salesforce/apex/AsynchronousJavaScriptController.getTextMethod3';

var contactList = ['0035g00000AKsBPAA1','0035g00000AKsBPAA1','0035g00000AKsBPAA1'];

export default class AsynchronousJavaScriptComponent extends LightningElement {
    @track contactrecorddetails;
    @track isSpinner = false;
    
    connectedCallback(){
        console.log('@@@ connectedCallback called.');
        this.isSpinner = true;

    }
    
    handleCallback(event){

    }

    handlePromise(event){
        console.log('@@@ handlePromise called.');

        const asynchronousMethod = (resolve, reject) => {
            setTimeout(() => {
               resolve('resolve called.'); // or reject('TestError')l
            }, 500);
         }
          
         // resolve funtion call on fulfilled
         // reject funtion call on rejected 
          
         new Promise(asynchronousMethod)
         .then((value) => {
            // If the promise resolves, we enter this code block
            console.log(value); // Test
         })
         .catch((error) => {
            // If the promise rejects, we enter this code block
            console.log(error); // TestError
         })
         .finally(() => {
            console.log('Finally.'); // Finally
         })
          
         // output: Test Finally
    }

    handlePromiseApex(event){
        console.log('@@@ handlePromiseApex called.');
        
        getContactDetails({recordId : '0035g00000AKsBPAA1'})
        .then(result => {
            console.log('@@@ result'+result);
            this.contactrecorddetails = result;
            this.isSpinner = false;
        })
        .catch(error => {
            console.log('@@@ result'+error);
        })
        .finally(() => {
            console.log('');
        })
    }


    handlePromiseChain(event){
        console.log('@@@ handlePromiseChain called.');
        getTextMethod1()
        .then(result => {
            console.log('@@@ result'+result);
        })
        .then(result => {
            console.log('@@@ operation B');
        })
        .catch(error => {
            console.log('@@@ error '+error);
        })
        .finally(() => {
            console.log('finally');
        })
    }
    
    handlePromiseAll(event){
        //const apexpromises = this.contactList.map(contactId => getContactDetails({recordId:contactId}));
        const apexPromises = contactList.map(contactId => getContactDetails({
            recordId: contactId
        }));
        this.resolveApexPromises(apexPromises);
    }

    resolveApexPromises(apexPromises){
        Promise.all(apexPromises)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log('Finally');
        })
    }

    handleAsynchAwait(event){
        console.log('@@@ handleAsynchAwait called');
        this.invokeApexMethods();
    }

    async invokeApexMethods(){
        console.log('@@@ invokeApexMethods called.');
        const result1 = await getTextMethod1();
        console.log('@@@ Method1 result: ' + result1);

        const result2 = await getTextMethod2({
            message1: result1
        });
        console.log('@@@ Method2 result: ' + result2);
        
        const result3 = await getTextMethod3({
            message1: result2
        });
        console.log('@@@ Method3 result: ' + result3);
    }
}