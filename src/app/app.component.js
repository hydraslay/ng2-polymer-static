var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
export var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
        this.myLabel = 'Select a number';
        this.myValue = '4';
        this.myItems = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        this.birthday = "2000-01-01";
        this.people = [
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
    }
    AppComponent.prototype.onGridReady = function (grid) {
        grid.columns[0].renderer = function (cell) {
            return cell.element.textContent = cell.row.index;
        };
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            template: "\n    <h1>{{title}}</h1>\n    <h2>{{title}}</h2>\n    <vaadin-combo-box [label]=\"myLabel\" [(value)]=\"myValue\" [items]=\"myItems\"></vaadin-combo-box>\n    <paper-input [(value)]=\"myValue\"></paper-input>\n    <paper-button onclick=\"testdialog.open()\" raised>ShowDialog</paper-button>\n    <paper-button onclick=\"testtoast.open()\" raised>ShowToast</paper-button>\n    <paper-checkbox>{{title}}</paper-checkbox>\n    <paper-dialog id=\"testdialog\">{{title}}</paper-dialog>\n    <paper-toast id=\"testtoast\">{{title}}</paper-toast>\n    <paper-dropdown-menu>\n      <paper-listbox class=\"dropdown-content\">\n      <paper-item *ngFor=\"let item of myItems\">{{item}}</paper-item>\n      </paper-listbox>\n    </paper-dropdown-menu>\n\n    <paper-menu-button>\n      <paper-icon-button icon=\"menu\" class=\"dropdown-trigger\"></paper-icon-button>\n      <paper-menu class=\"dropdown-content\">\n        <paper-item>Share</paper-item>\n        <paper-item>Settings</paper-item>\n        <paper-item>Help</paper-item>\n      </paper-menu>\n    </paper-menu-button>\n\n    <label id=\"label1\">Dinosaurs:</label>\n    <paper-radio-group aria-labelledby=\"label1\">\n      <paper-radio-button name=\"a\">allosaurus</paper-radio-button>\n      <paper-radio-button name=\"b\">brontosaurus</paper-radio-button>\n      <paper-radio-button name=\"d\" disabled>diplodocus</paper-radio-button>\n    </paper-radio-group>\n\n    <vaadin-date-picker label=\"Pick a date\"></vaadin-date-picker>\n    <vaadin-date-picker label=\"Birthday\" [(value)]=\"birthday\"></vaadin-date-picker>\n\n    <vaadin-grid (ready)=\"onGridReady($event)\" [items]=\"people\">\n      <table>\n        <colgroup>\n          <col name=\"firstName\">\n          <col name=\"lastName\">\n          <col name=\"email\">\n        </colgroup>\n      </table>\n    </vaadin-grid>\n\n  ",
            styles: ["\n    paper-input,\n      vaadin-combo-box {\n        background: var(--paper-grey-700);\n        padding: 8px;\n      }\n  "],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map