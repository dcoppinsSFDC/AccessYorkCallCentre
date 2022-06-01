/**
 * @description       :
 * @author            : dcoppins.cert@gmail.com
 * @group             :
 * @last modified on  : 04-24-2022
 * @last modified by  : dcoppins.cert@gmail.com
 **/
import { LightningElement, api } from "lwc";

export default class AyCallCentreQuickActions extends LightningElement {
  showModal = false;
  showModalMain = false;
  // passChildValue = 899;

  // @api show() {
  //   this.showModal = true;
  // }
  // handleDialogClose() {
  //   this.showModal = false;
  // }
  // handleModalMain() {
  //   this.showModalMain = true;
  //   this.showModal = false;
  //   this.handleChildCall();
  //   console.log("this Button Fired!!*!");
  //   this.handleShowCaseModal();
  // }
  // closeModalMain() {
  //   this.showModalMain = false;
  //   this.getConsoleLog;
  //   console.log("this Button Fired???");
  // }
  // btnClick() {
  //   console.log("this Clicked");
  // }
  // handleShowCaseModal() {
  //   const caseModal = this.template.querySelector("c-ay-Case-Modal");
  //   caseModal.caseShow();
  //   this.showModal = false;
  // }
  // provideLog() {
  //   console.log("I'm pushing the Data to Child");
  // }
  // handleChildCall() {
  //   var childCompVar = this.template
  //     .querySelector("c-ay-case-modal")
  //     .testChildMethod(this.passChildValue);
  // }
  handleQuickActions() {
    this.showModal = true;
    console.log("Modal Fired!");
  }
  handleCancelModal() {
    this.showModal = false;
  }
}
