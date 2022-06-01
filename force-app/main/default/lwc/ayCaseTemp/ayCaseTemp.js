/**
 * @description       :
 * @author            : dcoppins.cert@gmail.com
 * @group             :
 * @last modified on  : 04-26-2022
 * @last modified by  : dcoppins.cert@gmail.com
 * Modifications Log
 * Ver   Date         Author                    Modification
 * 1.0   05-01-2021   dcoppins.cert@gmail.com   Initial Version
 **/
import { LightningElement, wire } from "lwc";

import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { NavigationMixin } from "lightning/navigation";

import { getRecord } from "lightning/uiRecordApi";
import USER_ID from "@salesforce/user/Id";
import NAME_FIELD from "@salesforce/schema/User.Name";
import EMAIL_FIELD from "@salesforce/schema/User.Email";
import Title_FIELD from "@salesforce/schema/User.Title";

export default class CustomerSupportRep extends NavigationMixin(
  LightningElement
) {
  recordId;
  disableBTN = false;

  error;
  email;
  name;
  title;

  @wire(getRecord, {
    recordId: USER_ID,
    fields: [NAME_FIELD, EMAIL_FIELD, Title_FIELD]
  })
  wireuser({ error, data }) {
    if (error) {
      this.error = error;
    } else if (data) {
      this.email = data.fields.Email.value;
      this.name = data.fields.Name.value;
      this.title = data.fields.Title.value;
    }
  }

  // handleSubmit(event) {
  //   event.preventDefault();

  //   // this.validateData();
  //   const fields = event.detail.fields;
  //   this.template.querySelector("lightning-record-edit-form").submit(fields);
  //   this.disableBTN = true;
  // }
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
          url: `https://dcoppinsdev-dev-ed.lightning.force.com/lightning/r/Case/${event.detail.id}/view`,
          label: "here"
        }
      ]
    });
    this.dispatchEvent(toastEvent);
    this.navigateToListView();
    this.disableBTN = false;
    console.log(`Button Enabled`);
  }
  navigateToListView() {
    // Navigate to the Contact object's Recent list view.
    this[NavigationMixin.Navigate]({
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Case",
        actionName: "list"
      },
      state: {
        // 'filterName' is a property on the page 'state'
        // and identifies the target list view.
        // It may also be an 18 character list view id.
        filterName: "Recent" // or by 18 char '00BT0000002TONQMA4'
      }
    });
  }
  disableBtn() {
    const disableBTN = this.template.querySelectorAll("lightning-button");
    console.log(`The Class is ${disableBTN}`);
    if ((disableBTN.disabled = false)) {
      disableBTN.forEach((button) => {
        button.disabled = true;
      });
      console.log("Reset Fired");
    }
  }

  get options() {
    return [
      { label: "Call Disconnected", value: "calldisconnect" },
      { label: "Parent B", value: "Parent B" },
      { label: "Parent C", value: "Parent C" }
    ];
  }
  handleChange(event) {
    const inputFields = this.template.querySelectorAll("lightning-input-field");
    console.log(`the value for InputFields is ${inputFields}`);
    if (event.target.value === "calldisconnect") {
      inputFields.forEach((field) => {
        if (field.fieldName == "Subject") {
          field.value = "Call Disconnected";
        }
        if (field.fieldName == "Municipality__c") {
          field.value = "Not Applicable/Not Provided";
        }
        if (field.fieldName == "Type") {
          field.value = "Inquiry";
        }
        if (field.fieldName == "Service_Area__c") {
          field.value = "Access York";
        }
        if (field.fieldName == "Branch__c") {
          field.value = "Integrated Business Services";
        }
        if (field.fieldName == "Department__c") {
          field.value = "CHS";
        }
        if (field.fieldName == "Category__c") {
          field.value = "Call Disconnected before inquiry";
        }
        if (field.fieldName == "AY_SubCategory__c") {
          field.value = "Call Disconnected before inquiry";
        }
        if (field.fieldName == "Role_1_Action__c") {
          field.value = "Call Disconnected";
        }
        if (field.fieldName == "COVID_19_Related__c") {
          field.value = "No";
        }
        if (field.fieldName == "Origin") {
          field.value = "Call";
        }
        if (field.fieldName == "Fully_Resolved__c") {
          field.value = "Yes";
        }
        if (field.fieldName == "Status") {
          field.value = "New";
        }

        // if (field.fieldName == "") {
        //   field.value = "";
        // }
      });
      const [...all] = this.inputFields;
      console.log(all);
    }
  }
  handleReset() {
    const resetFields = this.template.querySelectorAll("lightning-input-field");
    if (resetFields) {
      resetFields.forEach((field) => {
        field.reset();
      });
      console.log("Reset Fired");
    }
  }
}
