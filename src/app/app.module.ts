import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PolymerElement } from '@vaadin/angular2-polymer';

import { AppComponent } from './app.component';

import { PaperInput } from './polymer/paper-input-directives';
import { VaadinComboBox } from './polymer/vaadin-combo-box-directives';
import { PaperButton } from './polymer/paper-button-directives';
import { PaperCheckbox } from './polymer/paper-checkbox-directives';
import { PaperDialog } from './polymer/paper-dialog-directives';
import { PaperDialogScrollable } from './polymer/paper-dialog-scrollable-directives';
import { PaperDropdownMenu } from './polymer/paper-dropdown-menu-directives';
import { PaperIconButton } from './polymer/paper-icon-button-directives';
import { PaperItem } from './polymer/paper-item-directives';
import { PaperMenuButton } from './polymer/paper-menu-button-directives';
import { PaperMenu } from './polymer/paper-menu-directives';
import { PaperRadioButton } from './polymer/paper-radio-button-directives';
import { PaperRadioGroup } from './polymer/paper-radio-group-directives';
import { PaperToast } from './polymer/paper-toast-directives';
import { VaadinDatePicker } from './polymer/vaadin-date-picker-directives';
import { VaadinGrid } from './polymer/vaadin-grid-directives';
import { VaadinUpload } from './polymer/vaadin-upload-directives';

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
    VaadinUpload
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
