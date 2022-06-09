import { LightningElement,api } from 'lwc';

export default class SpinnerComponent extends LightningElement {
    @api isLoaded = false;
    // change isLoaded to the opposite of its current value
    handleClick() {
        this.isLoaded = !this.isLoaded;
    }

}