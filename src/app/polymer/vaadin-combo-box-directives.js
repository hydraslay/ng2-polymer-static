var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, EventEmitter, Renderer, forwardRef, IterableDiffers, KeyValueDiffers, DefaultIterableDiffer, NgZone, Injector } from '@angular/core';
import { FormControlName, NG_VALUE_ACCESSOR } from '@angular/forms';
export var VaadinComboBoxChangeEventsAdapterDirective = (function () {
    function VaadinComboBoxChangeEventsAdapterDirective() {
        this.eventNameForProperty = function (property) { return (property + "Change"); };
        this[this.eventNameForProperty('invalid')] = new EventEmitter(false);
        this[this.eventNameForProperty('value')] = new EventEmitter(false);
        this[this.eventNameForProperty('opened')] = new EventEmitter(false);
        this[this.eventNameForProperty('selectedItem')] = new EventEmitter(false);
    }
    VaadinComboBoxChangeEventsAdapterDirective.prototype._emitChangeEvent = function (property, event) {
        if (!event.detail.path) {
            this[this.eventNameForProperty(property)].emit(event.detail.value);
        }
    };
    VaadinComboBoxChangeEventsAdapterDirective = __decorate([
        Directive({
            selector: 'vaadin-combo-box',
            outputs: ["invalidChange", "valueChange", "openedChange", "selectedItemChange"],
            host: { "(invalid-changed)": "_emitChangeEvent('invalid', $event);", "(value-changed)": "_emitChangeEvent('value', $event);", "(opened-changed)": "_emitChangeEvent('opened', $event);", "(selected-item-changed)": "_emitChangeEvent('selectedItem', $event);" }
        }), 
        __metadata('design:paramtypes', [])
    ], VaadinComboBoxChangeEventsAdapterDirective);
    return VaadinComboBoxChangeEventsAdapterDirective;
}());
export var VaadinComboBoxValidationDirective = (function () {
    function VaadinComboBoxValidationDirective(el, injector) {
        this.injector = injector;
        this._element = el.nativeElement;
    }
    VaadinComboBoxValidationDirective.prototype.ngDoCheck = function () {
        var control = this.injector.get(FormControlName, null);
        if (control) {
            this._element.invalid = !control.pristine && !control.valid;
        }
    };
    VaadinComboBoxValidationDirective = __decorate([
        Directive({
            selector: 'vaadin-combo-box',
        }), 
        __metadata('design:paramtypes', [ElementRef, Injector])
    ], VaadinComboBoxValidationDirective);
    return VaadinComboBoxValidationDirective;
}());
export var VaadinComboBoxFormElementDirective = (function () {
    function VaadinComboBoxFormElementDirective(renderer, el) {
        var _this = this;
        this._renderer = renderer;
        this._element = el.nativeElement;
        this._element.addEventListener('blur', function () { return _this.onTouched(); }, true);
    }
    VaadinComboBoxFormElementDirective.prototype.onChange = function (_) { };
    VaadinComboBoxFormElementDirective.prototype.onTouched = function (_) { };
    VaadinComboBoxFormElementDirective.prototype.writeValue = function (value) {
        this._renderer.setElementProperty(this._element, value, value);
    };
    VaadinComboBoxFormElementDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    VaadinComboBoxFormElementDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    VaadinComboBoxFormElementDirective.prototype.onValueChanged = function (value) { this.onChange(value); };
    VaadinComboBoxFormElementDirective = __decorate([
        Directive({
            selector: 'vaadin-combo-box',
            providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(function () { return VaadinComboBoxFormElementDirective; }), multi: true }],
            host: { '(valueChange)': 'onValueChanged($event)' }
        }), 
        __metadata('design:paramtypes', [Renderer, ElementRef])
    ], VaadinComboBoxFormElementDirective);
    return VaadinComboBoxFormElementDirective;
}());
export var VaadinComboBoxNotifyForDiffersDirective = (function () {
    function VaadinComboBoxNotifyForDiffersDirective(el, iterableDiffers, keyValueDiffers) {
        this.arrayAndObjectProperties = ["items"];
        this._element = el.nativeElement;
        this._iterableDiffers = iterableDiffers;
        this._keyValueDiffers = keyValueDiffers;
        this._differs = {};
        this._arrayDiffs = {};
    }
    VaadinComboBoxNotifyForDiffersDirective.prototype.ngOnInit = function () {
        var _this = this;
        var elm = this._element;
        this.arrayAndObjectProperties.filter(function (property) { return elm[property] && !_this[property]; })
            .forEach(function (property) {
            _this[property] = elm[property];
        });
    };
    VaadinComboBoxNotifyForDiffersDirective.prototype._setValueFromElement = function (property, event) {
        var target = event.target;
        if (this[property] !== target[property]) {
            this[property] = target[property];
            this._differs[property] = this._createDiffer(this[property]);
        }
    };
    VaadinComboBoxNotifyForDiffersDirective.prototype._createDiffer = function (value) {
        var differ = Array.isArray(value) ? this._iterableDiffers.find(value).create(null) : this._keyValueDiffers.find(value || {}).create(null);
        differ.diff(value);
        return differ;
    };
    VaadinComboBoxNotifyForDiffersDirective.prototype._handleArrayDiffs = function (property, diff) {
        var _this = this;
        if (diff) {
            diff.forEachRemovedItem(function (item) { return _this._notifyArray(property, item.previousIndex); });
            diff.forEachAddedItem(function (item) { return _this._notifyArray(property, item.currentIndex); });
            diff.forEachMovedItem(function (item) { return _this._notifyArray(property, item.currentIndex); });
        }
    };
    VaadinComboBoxNotifyForDiffersDirective.prototype._handleObjectDiffs = function (property, diff) {
        var _this = this;
        if (diff) {
            var notify = function (item) { return _this._notifyPath(property + '.' + item.key, item.currentValue); };
            diff.forEachRemovedItem(notify);
            diff.forEachAddedItem(notify);
            diff.forEachChangedItem(notify);
        }
    };
    VaadinComboBoxNotifyForDiffersDirective.prototype._notifyArray = function (property, index) {
        this._notifyPath(property + '.' + index, this[property][index]);
    };
    VaadinComboBoxNotifyForDiffersDirective.prototype._notifyPath = function (path, value) {
        this._element.notifyPath(path, value);
    };
    VaadinComboBoxNotifyForDiffersDirective.prototype.ngDoCheck = function () {
        var _this = this;
        this.arrayAndObjectProperties.forEach(function (property) {
            var elm = _this._element;
            var _differs = _this._differs;
            if (elm[property] !== _this[property]) {
                elm[property] = _this[property];
                _differs[property] = _this._createDiffer(_this[property]);
            }
            else if (_differs[property]) {
                var diff = _differs[property].diff(_this[property]);
                if (diff instanceof DefaultIterableDiffer) {
                    _this._handleArrayDiffs(property, diff);
                }
                else {
                    _this._handleObjectDiffs(property, diff);
                }
            }
        });
    };
    VaadinComboBoxNotifyForDiffersDirective = __decorate([
        Directive({
            selector: 'vaadin-combo-box',
            inputs: ["items"],
            host: { "(items-changed)": "_setValueFromElement('items', $event);" }
        }), 
        __metadata('design:paramtypes', [ElementRef, IterableDiffers, KeyValueDiffers])
    ], VaadinComboBoxNotifyForDiffersDirective);
    return VaadinComboBoxNotifyForDiffersDirective;
}());
export var VaadinComboBoxReloadConfigurationDirective = (function () {
    function VaadinComboBoxReloadConfigurationDirective(el, zone) {
        var Polymer = window.Polymer;
        if (!Polymer.Settings.useShadow) {
            el.nativeElement.async(function () {
                if (el.nativeElement.isInitialized()) {
                    zone.runOutsideAngular(function () {
                        el.nativeElement.reloadConfiguration();
                    });
                }
            });
        }
    }
    VaadinComboBoxReloadConfigurationDirective = __decorate([
        Directive({
            selector: 'vaadin-combo-box',
        }), 
        __metadata('design:paramtypes', [ElementRef, NgZone])
    ], VaadinComboBoxReloadConfigurationDirective);
    return VaadinComboBoxReloadConfigurationDirective;
}());
export var VaadinComboBox = [VaadinComboBoxChangeEventsAdapterDirective, VaadinComboBoxNotifyForDiffersDirective, VaadinComboBoxFormElementDirective, VaadinComboBoxValidationDirective];
//# sourceMappingURL=vaadin-combo-box-directives.js.map