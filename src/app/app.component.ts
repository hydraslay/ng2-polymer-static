import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>{{title}}</h2>
    <vaadin-combo-box [label]="myLabel" [(value)]="myValue" [items]="myItems"></vaadin-combo-box>
    <paper-input [(value)]="myValue"></paper-input>
    <paper-button onclick="testdialog.open()" raised>ShowDialog</paper-button>
    <paper-button onclick="testtoast.open()" raised>ShowToast</paper-button>
    <paper-checkbox>{{title}}</paper-checkbox>
    <paper-dialog id="testdialog">{{title}}</paper-dialog>
    <paper-toast id="testtoast">{{title}}</paper-toast>
    <paper-dropdown-menu>
      <paper-listbox class="dropdown-content">
      <paper-item *ngFor="let item of myItems">{{item}}</paper-item>
      </paper-listbox>
    </paper-dropdown-menu>

    <paper-menu-button>
      <paper-icon-button icon="menu" class="dropdown-trigger"></paper-icon-button>
      <paper-menu class="dropdown-content">
        <paper-item>Share</paper-item>
        <paper-item>Settings</paper-item>
        <paper-item>Help</paper-item>
      </paper-menu>
    </paper-menu-button>

    <label id="label1">Dinosaurs:</label>
    <paper-radio-group aria-labelledby="label1">
      <paper-radio-button name="a">allosaurus</paper-radio-button>
      <paper-radio-button name="b">brontosaurus</paper-radio-button>
      <paper-radio-button name="d" disabled>diplodocus</paper-radio-button>
    </paper-radio-group>

    <vaadin-date-picker label="Pick a date"></vaadin-date-picker>
    <vaadin-date-picker label="Birthday" [(value)]="birthday"></vaadin-date-picker>

    <vaadin-grid (ready)="onGridReady($event)" [items]="people">
      <table>
        <colgroup>
          <col name="firstName">
          <col name="lastName">
          <col name="email">
        </colgroup>
      </table>
    </vaadin-grid>

  `,
  styles: [`
    paper-input,
      vaadin-combo-box {
        background: var(--paper-grey-700);
        padding: 8px;
      }
  `],
})

export class AppComponent {
  title = 'app works!';
  myLabel = 'Select a number';
  myValue = '4';
  myItems = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  birthday = "2000-01-01";
  people = [
    {
      firstName: 'string',
      lastName: 'string',
      email: 'string'
    }, {
      firstName: 'string1',
      lastName: 'string2',
      email: 'string3'
    }
  ];

  onGridReady(grid: any) {
    grid.columns[0].renderer = cell =>
      cell.element.textContent = cell.row.index;

  }

}
