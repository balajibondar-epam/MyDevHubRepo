public with sharing class LazyLoadingController {
    @AuraEnabled
    public static List<Account> getAccountRecords(Integer offSetCount) {
        return [SELECT Id, Name, AccountNumber, Phone, CreatedDate FROM Account order by Name asc LIMIT 20 OFFSET :offSetCount];
    }
}