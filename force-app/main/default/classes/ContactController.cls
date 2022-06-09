public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(String searchKey) {
        System.debug('searchKey ::: '+searchKey);
        return [
            SELECT Id, Name, Title, Phone, Email
            FROM Contact
            WITH SECURITY_ENFORCED
            LIMIT 5
        ];
    }
}