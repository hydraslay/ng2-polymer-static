import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PolymerElement } from '@vaadin/angular2-polymer';

import { AppComponent } from './app.component';

import {
  PaperInput,
  PaperInputReloadConfigurationDirective
 } from './polymer/paper-input-directives';
import {
  VaadinComboBox,
  VaadinComboBoxReloadConfigurationDirective
} from './polymer/vaadin-combo-box-directives';
import {
  PaperButton,
  PaperButtonReloadConfigurationDirective,
  PaperButtonFormElementDirective,
  PaperButtonValidationDirective,
 } from './polymer/paper-button-directives';
import {
  PaperCheckbox,
  PaperCheckboxReloadConfigurationDirective,
 } from './polymer/paper-checkbox-directives';
import {
  PaperDialog,
  PaperDialogReloadConfigurationDirective,
  PaperDialogFormElementDirective,
  PaperDialogValidationDirective,
 } from './polymer/paper-dialog-directives';
import {
  PaperDialogScrollable,
  PaperDialogScrollableReloadConfigurationDirective,
  PaperDialogScrollableFormElementDirective,
  PaperDialogScrollableValidationDirective
 } from './polymer/paper-dialog-scrollable-directives';
import {
  PaperDropdownMenu,
  PaperDropdownMenuReloadConfigurationDirective
 } from './polymer/paper-dropdown-menu-directives';
import {
  PaperIconButton,
  PaperIconButtonReloadConfigurationDirective,
  PaperIconButtonFormElementDirective,
  PaperIconButtonValidationDirective,
} from './polymer/paper-icon-button-directives';
import {
  PaperItem,
  PaperItemReloadConfigurationDirective,
  PaperItemFormElementDirective,
  PaperItemValidationDirective,
 } from './polymer/paper-item-directives';
import {
  PaperMenuButton,
  PaperMenuButtonReloadConfigurationDirective,
  PaperMenuButtonFormElementDirective,
  PaperMenuButtonValidationDirective,
 } from './polymer/paper-menu-button-directives';
import { PaperMenu,
  PaperMenuReloadConfigurationDirective,
  PaperMenuValidationDirective,
  PaperMenuFormElementDirective
 } from './polymer/paper-menu-directives';
import {
  PaperRadioButton,
  PaperRadioButtonReloadConfigurationDirective
 } from './polymer/paper-radio-button-directives';
import {
  PaperRadioGroup,
  PaperRadioGroupReloadConfigurationDirective,
  PaperRadioGroupFormElementDirective,
  PaperRadioGroupValidationDirective } from './polymer/paper-radio-group-directives';
import {
  PaperToast,
  PaperToastReloadConfigurationDirective,
  PaperToastFormElementDirective,
  PaperToastValidationDirective
 } from './polymer/paper-toast-directives';
import {
  VaadinDatePicker,
  VaadinDatePickerReloadConfigurationDirective
 } from './polymer/vaadin-date-picker-directives';
import {
  VaadinGrid,
  VaadinGridReloadConfigurationDirective,
  VaadinGridFormElementDirective,
  VaadinGridValidationDirective } from './polymer/vaadin-grid-directives';
import {
  VaadinUpload,
  VaadinUploadReloadConfigurationDirective,
  VaadinUploadFormElementDirective,
  VaadinUploadValidationDirective 
} from './polymer/vaadin-upload-directives';

@NgModule({
  declarations: [
    AppComponent,
    PaperInput,
    VaadinComboBox,
    PaperButton,
    PaperCheckbox,
    PaperDialog,
    PaperDialogScrollable,
    PaperDropdownMenu,
    PaperIconButton,
    PaperItem,
    PaperMenuButton,
    PaperMenu,
    PaperRadioButton,
    PaperRadioGroup,
    PaperToast,
    VaadinDatePicker,
    VaadinGrid,
    VaadinUpload,
    VaadinUploadReloadConfigurationDirective,
    VaadinUploadFormElementDirective,
    VaadinUploadValidationDirective,
    VaadinGridReloadConfigurationDirective,
    VaadinGridFormElementDirective,
    VaadinGridValidationDirective,
    VaadinDatePickerReloadConfigurationDirective,
    PaperToastReloadConfigurationDirective,
  PaperToastFormElementDirective,
  PaperToastValidationDirective,
  PaperRadioGroupReloadConfigurationDirective,
  PaperRadioGroupFormElementDirective,
  PaperRadioGroupValidationDirective,
  PaperRadioButtonReloadConfigurationDirective,
  PaperMenuReloadConfigurationDirective,
  PaperMenuFormElementDirective,
  PaperMenuValidationDirective,
  PaperMenuButtonReloadConfigurationDirective,
  PaperMenuButtonFormElementDirective,
  PaperMenuButtonValidationDirective,
  PaperItemReloadConfigurationDirective,
  PaperItemFormElementDirective,
  PaperItemValidationDirective,
  PaperIconButtonReloadConfigurationDirective,
  PaperIconButtonFormElementDirective,
  PaperIconButtonValidationDirective,
  PaperDropdownMenuReloadConfigurationDirective,
  PaperDialogScrollableReloadConfigurationDirective,
  PaperDialogScrollableFormElementDirective,
  PaperDialogScrollableValidationDirective,
  PaperDialogReloadConfigurationDirective,
  PaperDialogFormElementDirective,
  PaperDialogValidationDirective,
  PaperCheckboxReloadConfigurationDirective,
  PaperButtonReloadConfigurationDirective,
  PaperButtonFormElementDirective,
  PaperButtonValidationDirective,
  VaadinComboBoxReloadConfigurationDirective,
  PaperInputReloadConfigurationDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
