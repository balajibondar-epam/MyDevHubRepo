public with sharing class RefreshPageController {
    @AuraEnabled
    public static Account updateAccount(String accountId , String selectedName) {
       System.debug('@@@accountId :::'+accountId);
       System.debug('@@@selectedName :::'+selectedName);
       
       Account accountObj = new Account();
       accountObj = [select Id,Name from Account where Id=:accountId LIMIT 1];
       //accountObj.Name='Updated Account Name';
       accountObj.Name = selectedName;
       update accountObj;
       return accountObj;
    }
}