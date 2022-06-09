import { LightningElement,track,api } from 'lwc';

export default class TrackArrayComponent extends LightningElement {
selectedOption;//variable initilization
changeAccountOptionPressFlag = false;
@track localOptionList=[
    {'label':'Open','value':'Open'},
    {'label':'InProgress','value':'InProgress'},
    {'label':'Closed','value':'Closed'}
];

@api
get optionList() {
    return this.localOptionList;
}
set optionList(value) {
    this.localOptionList = value;
}

handleChangeOptionBtnClick(event){
    //code goes here....
    console.log('@@@@handleChangeOptionBtnClick called.');
    this.changeAccountOptionPressFlag = true; 

    this.localOptionList.push({'label':'On Hold','value':'onHold'})
    //important code to reflect @track changes on UI
    this.localOptionList = JSON.parse(JSON.stringify(this.localOptionList));
    
}

handleOptionChange(event){
    console.log('@@@@handleOptionChange called.');
    this.selectedOption = event.target.value;
}

}