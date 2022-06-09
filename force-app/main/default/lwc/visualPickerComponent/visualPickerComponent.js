import { LightningElement,track } from 'lwc';

export default class VisualPickerComponent extends LightningElement {
    @track set1Selected;
    @track set2Selected;
    @track set3Selected;
    @track set4Selected;

    @track items1 = [{
        idx : 0,
        icon : 'standard:lead',
        label : 'Set 1 Option 1 (large)',
        disabled : '',
        pickerSize : 'slds-visual-picker slds-visual-picker_large'
    },{
        idx : 1,
        icon : 'standard:contact',
        label : 'Set 1 Option 2 (medium)',
        disabled : '',
        pickerSize : 'slds-visual-picker slds-visual-picker_medium'
    },{
        idx : 2,
        icon : 'standard:account',
        label : 'Set 1 Option 3 (small)',
        disabled : 'disabled',
        pickerSize : 'slds-visual-picker slds-visual-picker_small'
    }];

    @track items2 = [{
        idx : 3,
        icon : 'standard:lead',
        label : 'Set 2 Option 1 (small)',
        disabled : '',
        pickerSize : 'slds-visual-picker slds-visual-picker_small'
    },{
        idx : 4,
        icon : 'standard:contact',
        label : 'Set 2 Option 2 (medium)',
        disabled : '',
        pickerSize : 'slds-visual-picker slds-visual-picker_medium'
    },{
        idx : 5,
        icon : 'standard:account',
        label : 'Set 2 Option 3 (large)',
        disabled : 'disabled',
        pickerSize : 'slds-visual-picker slds-visual-picker_large'
    }];

    @track items3 = [{
        idx : 9,
        icon : 'standard:lead',
        label : 'Set 4 Option 1 (small)',
        disabled : '',
        pickerSize : 'slds-visual-picker slds-visual-picker_small'
    },{
        idx : 10,
        icon : 'standard:contact',
        label : 'Set 4 Option 2 (medium)',
        disabled : '',
        pickerSize : 'slds-visual-picker slds-visual-picker_medium'
    },{
        idx : 11,
        icon : 'standard:account',
        label : 'Set 4 Option 3 (large)',
        disabled : 'disabled',
        pickerSize : 'slds-visual-picker slds-visual-picker_large'
    }];

    @track items4 = [{
        idx : 6,
        icon : 'standard:lead',
        label : 'Set 3 Option 1 (large)',
        disabled : '',
        pickerSize : 'slds-visual-picker slds-visual-picker_large'
    },{
        idx : 7,
        icon : 'standard:contact',
        label : 'Set 3 Option 2 (medium)',
        disabled : '',
        pickerSize : 'slds-visual-picker slds-visual-picker_medium'
    },{
        idx : 8,
        icon : 'standard:account',
        label : 'Set 3 Option 3 (small)',
        disabled : 'disabled',
        pickerSize : 'slds-visual-picker slds-visual-picker_small'
    }];
    
    handleSet1Change(e){
        this.set1Selected = e.target.value;
    }
    handleSet2Change(e){
        let x  = [];
        this.template.querySelectorAll('[name="set2"]').forEach(c => {
            if(c.checked)
                x.push(c.value);
        });
        this.set2Selected = x.toString();
    }
    handleSet3Change(e){
        this.set3Selected = e.target.value;
    }
    handleSet4Change(e){
        let x  = [];
        this.template.querySelectorAll('[name="set4"]').forEach(c => {
            if(c.checked)
                x.push(c.value);
        });
        this.set4Selected = x.toString();
    }

}