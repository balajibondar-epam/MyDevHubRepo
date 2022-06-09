import { LightningElement,track,api,wire } from 'lwc';

export default class DataTableDemoComponent extends LightningElement {
    @track showdatatable= false;
    columns = [
        { label: 'Name', fieldName: 'name' },
        { label: 'Website', fieldName: 'website', type: 'url' },
        { label: 'Phone', fieldName: 'phone', type: 'phone' },
        //{ label: 'Balance', fieldName: 'amount', type: 'currency' },
        //c/parentComponent{ label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
    ];

    data=[
        {name:'testname',website:'www.testsite.com',phone:'9733443343'},
        {name:'testname',website:'www.testsite.com',phone:'9733443343'},
        {name:'testname',website:'www.testsite.com',phone:'9733443343'},
        {name:'testname',website:'www.testsite.com',phone:'9733443343'},
        {name:'testname',website:'www.testsite.com',phone:'9733443343'}
    ];

    handleToggleDataTable(event){
        console.log('@@@@@@@ handleToggleDataTable called.');
        this.showdatatable =! this.showdatatable;
    }
}