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
export var VaadinGridChangeEventsAdapterDirective = (function () {
    function VaadinGridChangeEventsAdapterDirective() {
        this.eventNameForProperty = function (property) { return (property + "Change"); };
        this[this.eventNameForProperty('columns')] = new EventEmitter(false);
    }
    VaadinGridChangeEventsAdapterDirective.prototype._emitChangeEvent = function (property, event) {
        if (!event.detail.path) {
            this[this.eventNameForProperty(property)].emit(event.detail.value);
        }
    };
    VaadinGridChangeEventsAdapterDirective = __decorate([
        Directive({
            selector: 'vaadin-grid',
            outputs: ["columnsChange"],
            host: { "(columns-changed)": "_emitChangeEvent('columns', $event);" }
        }), 
        __metadata('design:paramtypes', [])
    ], VaadinGridChangeEventsAdapterDirective);
    return VaadinGridChangeEventsAdapterDirective;
}());
export var VaadinGridValidationDirective = (function () {
    function VaadinGridValidationDirective(el, injector) {
        this.injector = injector;
        this._element = el.nativeElement;
    }
    VaadinGridValidationDirective.prototype.ngDoCheck = function () {
        var control = this.injector.get(FormControlName, null);
        if (control) {
            this._element.invalid = !control.pristine && !control.valid;
        }
    };
    VaadinGridValidationDirective = __decorate([
        Directive({
            selector: 'vaadin-grid',
        }), 
        __metadata('design:paramtypes', [ElementRef, Injector])
    ], VaadinGridValidationDirective);
    return VaadinGridValidationDirective;
}());
export var VaadinGridFormElementDirective = (function () {
    function VaadinGridFormElementDirective(renderer, el) {
        var _this = this;
        this._renderer = renderer;
        this._element = el.nativeElement;
        this._element.addEventListener('blur', function () { return _this.onTouched(); }, true);
    }
    VaadinGridFormElementDirective.prototype.onChange = function (_) { };
    VaadinGridFormElementDirective.prototype.onTouched = function (_) { };
    VaadinGridFormElementDirective.prototype.writeValue = function (value) {
        this._renderer.setElementProperty(this._element, value, value);
    };
    VaadinGridFormElementDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    VaadinGridFormElementDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    VaadinGridFormElementDirective.prototype.onValueChanged = function (value) { this.onChange(value); };
    VaadinGridFormElementDirective = __decorate([
        Directive({
            selector: 'vaadin-grid',
            providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(function () { return VaadinGridFormElementDirective; }), multi: true }],
            host: { '(valueChange)': 'onValueChanged($event)' }
        }), 
        __metadata('design:paramtypes', [Renderer, ElementRef])
    ], VaadinGridFormElementDirective);
    return VaadinGridFormElementDirective;
}());
export var VaadinGridNotifyForDiffersDirective = (function () {
    function VaadinGridNotifyForDiffersDirective(el, iterableDiffers, keyValueDiffers) {
        this.arrayAndObjectProperties = ["items", "columns", "sortOrder", "detailedEvents"];
        this._element = el.nativeElement;
        this._iterableDiffers = iterableDiffers;
        this._keyValueDiffers = keyValueDiffers;
        this._differs = {};
        this._arrayDiffs = {};
    }
    VaadinGridNotifyForDiffersDirective.prototype.ngOnInit = function () {
        var _this = this;
        var elm = this._element;
        this.arrayAndObjectProperties.filter(function (property) { return elm[property] && !_this[property]; })
            .forEach(function (property) {
            _this[property] = elm[property];
        });
    };
    VaadinGridNotifyForDiffersDirective.prototype._setValueFromElement = function (property, event) {
        var target = event.target;
        if (this[property] !== target[property]) {
            this[property] = target[property];
            this._differs[property] = this._createDiffer(this[property]);
        }
    };
    VaadinGridNotifyForDiffersDirective.prototype._createDiffer = function (value) {
        var differ = Array.isArray(value) ? this._iterableDiffers.find(value).create(null) : this._keyValueDiffers.find(value || {}).create(null);
        differ.diff(value);
        return differ;
    };
    VaadinGridNotifyForDiffersDirective.prototype._handleArrayDiffs = function (property, diff) {
        var _this = this;
        if (diff) {
            diff.forEachRemovedItem(function (item) { return _this._notifyArray(property, item.previousIndex); });
            diff.forEachAddedItem(function (item) { return _this._notifyArray(property, item.currentIndex); });
            diff.forEachMovedItem(function (item) { return _this._notifyArray(property, item.currentIndex); });
        }
    };
    VaadinGridNotifyForDiffersDirective.prototype._handleObjectDiffs = function (property, diff) {
        var _this = this;
        if (diff) {
            var notify = function (item) { return _this._notifyPath(property + '.' + item.key, item.currentValue); };
            diff.forEachRemovedItem(notify);
            diff.forEachAddedItem(notify);
            diff.forEachChangedItem(notify);
        }
    };
    VaadinGridNotifyForDiffersDirective.prototype._notifyArray = function (property, index) {
        this._notifyPath(property + '.' + index, this[property][index]);
    };
    VaadinGridNotifyForDiffersDirective.prototype._notifyPath = function (path, value) {
        this._element.notifyPath(path, value);
    };
    VaadinGridNotifyForDiffersDirective.prototype.ngDoCheck = function () {
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
    VaadinGridNotifyForDiffersDirective = __decorate([
        Directive({
            selector: 'vaadin-grid',
            inputs: ["items", "columns", "sortOrder", "detailedEvents"],
            host: { "(items-changed)": "_setValueFromElement('items', $event);", "(columns-changed)": "_setValueFromElement('columns', $event);", "(sort-order-changed)": "_setValueFromElement('sortOrder', $event);", "(detailed-events-changed)": "_setValueFromElement('detailedEvents', $event);" }
        }), 
        __metadata('design:paramtypes', [ElementRef, IterableDiffers, KeyValueDiffers])
    ], VaadinGridNotifyForDiffersDirective);
    return VaadinGridNotifyForDiffersDirective;
}());
export var VaadinGridReloadConfigurationDirective = (function () {
    function VaadinGridReloadConfigurationDirective(el, zone) {
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
    VaadinGridReloadConfigurationDirective = __decorate([
        Directive({
            selector: 'vaadin-grid',
        }), 
        __metadata('design:paramtypes', [ElementRef, NgZone])
    ], VaadinGridReloadConfigurationDirective);
    return VaadinGridReloadConfigurationDirective;
}());
export var VaadinGrid = [VaadinGridChangeEventsAdapterDirective, VaadinGridNotifyForDiffersDirective];
//# sourceMappingURL=vaadin-grid-directives.js.map