public with sharing class ParentAuraController {
    @AuraEnabled
    public static list<Account> getAccountList (){
        return [SELECT Id,Name FROM Account limit 10];
    }
}