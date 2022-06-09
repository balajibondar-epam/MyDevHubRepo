public with sharing class CustomInlineEditDataTableController {
    public CustomInlineEditDataTableController() {
        System.debug('CustomInlineEditDataTableController called:::');
    }

    //Retrieve the list of Accounts
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        System.debug('getAccountList called:::');
        try {
            return [SELECT Id, Name, Industry FROM Account with SECURITY_ENFORCED LIMIT 10];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
   
}