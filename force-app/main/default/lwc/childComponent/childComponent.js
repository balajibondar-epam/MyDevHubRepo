import { LightningElement ,api } from 'lwc';
export default class ChildComponent extends LightningElement {
@api childAttribute = 'initchildattributevalue';
constructor() {
    super();
    //code
   console.log('@@@@@@ Constructor called');
}
}