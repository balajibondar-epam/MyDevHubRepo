({
    doInit : function(component, event, helper) {
        console.log('doInit Called.');
    },
    saveBtnClick : function(component, event, helper) {
        console.log('saveBtnClick Called.');
        var FirstNumber=component.get("v.FirstNumber");
        var SecondNumber=component.get("v.SecondNumber");
        var Total = parseInt(FirstNumber) + parseInt(SecondNumber);
        component.set("v.Total", Total);
    },
    handleServerRequest : function(component, event, helper) {
        console.log('handleServerRequest Called.');
        
        var action = component.get("c.getAccountList");
        action.setCallback(this, function(response){
                  var state = response.getState();
            if(state == 'SUCCESS') {
                component.set('v.accountList', response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})