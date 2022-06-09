import { LightningElement,track,wire } from 'lwc';
import { CurrentPageReference  } from 'lightning/navigation';

export default class UrlParameterComponent extends LightningElement {
    currentPageReference = null; 
    urlStateParameters = null;
    @track urlId='';
    @track baseURL='';

    @wire(CurrentPageReference)
    getStateParameters(currentPageReference) {
       if (currentPageReference) {
          this.urlStateParameters = currentPageReference.state;
          this.urlId = this.urlStateParameters.id;
          //this.setParametersBasedOnUrl();
       }
    }

    connectedCallback(){
        this.baseURL = window.location.origin;
    } 
}