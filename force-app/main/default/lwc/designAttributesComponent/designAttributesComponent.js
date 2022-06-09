import { LightningElement,api } from 'lwc';

export default class DesignAttributesComponent extends LightningElement {
@api currentStep = "step-1";
@api type = "base";
@api variant = "base";
  steps = [
    { label: "Contacted", value: "step-1" },
    { label: "Open", value: "step-2" },
    { label: "Unqualified", value: "step-3" },
    { label: "Nurturing", value: "step-4" },
    { label: "Closed", value: "step-5" }
  ];
}