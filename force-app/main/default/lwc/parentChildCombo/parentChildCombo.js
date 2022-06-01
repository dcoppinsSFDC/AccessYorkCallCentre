/**
 * @description       :
 * @author            : dcoppins.cert@gmail.com
 * @group             :
 * @last modified on  : 04-23-2022
 * @last modified by  : dcoppins.cert@gmail.com
 **/
import { LightningElement, wire } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class ParentChildCombo extends LightningElement {
  handleSuccess(event) {
    const updatedRecord = event.detail.id;
    const payload = event.detail;
    // console.log(JSON.stringify(payload));
    // console.log("onsuccess: ", updatedRecord);
    const toastEvent = new ShowToastEvent({
      title: "Case created",
      message: "Record {0} created! See it {1}!",
      // message: "record ID: " + result.id,
      variant: "success",
      messageData: [
        "Salesforce",
        {
          url: `https://york--crmcc.lightning.force.com/lightning/r/Case/${event.detail.id}/view`,
          label: "here"
        }
      ]
    });
    this.dispatchEvent(toastEvent);
  }
}
