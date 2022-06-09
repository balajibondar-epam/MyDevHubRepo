public with sharing class AsynchronousJavaScriptController {
    @AuraEnabled
    public static Contact getContactDetails(String recordId){
        System.debug('@@@ getContactDetails called.');
        return [ SELECT Id, Name 
                 FROM Contact
                 WHERE Id = :recordId ];
    }
    
    @AuraEnabled
    public static string getTextMethod1(){
        return 'APEX-METHOD-1';
    }
 
    @AuraEnabled
    public static string getTextMethod2(){
        return 'APEX-METHOD-2';
    }
 
    @AuraEnabled
    public static string getTextMethod3(){
        return 'APEX-METHOD-3';
    }
}