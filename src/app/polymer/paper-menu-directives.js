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
export var PaperMenuChangeEventsAdapterDirective = (function () {
    function PaperMenuChangeEventsAdapterDirective() {
        this.eventNameForProperty = function (property) { return (property + "Change"); };
        this[this.eventNameForProperty('selected')] = new EventEmitter(false);
        this[this.eventNameForProperty('selectedItem')] = new EventEmitter(false);
        this[this.eventNameForProperty('items')] = new EventEmitter(false);
        this[this.eventNameForProperty('selectedValues')] = new EventEmitter(false);
        this[this.eventNameForProperty('selectedItems')] = new EventEmitter(false);
    }
    PaperMenuChangeEventsAdapterDirective.prototype._emitChangeEvent = function (property, event) {
        if (!event.detail.path) {
            this[this.eventNameForProperty(property)].emit(event.detail.value);
        }
    };
    PaperMenuChangeEventsAdapterDirective = __decorate([
        Directive({
            selector: 'paper-menu',
            outputs: ["selectedChange", "selectedItemChange", "itemsChange", "selectedValuesChange", "selectedItemsChange"],
            host: { "(selected-changed)": "_emitChangeEvent('selected', $event);", "(selected-item-changed)": "_emitChangeEvent('selectedItem', $event);", "(items-changed)": "_emitChangeEvent('items', $event);", "(selected-values-changed)": "_emitChangeEvent('selectedValues', $event);", "(selected-items-changed)": "_emitChangeEvent('selectedItems', $event);" }
        }), 
        __metadata('design:paramtypes', [])
    ], PaperMenuChangeEventsAdapterDirective);
    return PaperMenuChangeEventsAdapterDirective;
}());
export var PaperMenuValidationDirective = (function () {
    function PaperMenuValidationDirective(el, injector) {
        this.injector = injector;
        this._element = el.nativeElement;
    }
    PaperMenuValidationDirective.prototype.ngDoCheck = function () {
        var control = this.injector.get(FormControlName, null);
        if (control) {
            this._element.invalid = !control.pristine && !control.valid;
        }
    };
    PaperMenuValidationDirective = __decorate([
        Directive({
            selector: 'paper-menu',
        }), 
        __metadata('design:paramtypes', [ElementRef, Injector])
    ], PaperMenuValidationDirective);
    return PaperMenuValidationDirective;
}());
export var PaperMenuFormElementDirective = (function () {
    function PaperMenuFormElementDirective(renderer, el) {
        var _this = this;
        this._renderer = renderer;
        this._element = el.nativeElement;
        this._element.addEventListener('blur', function () { return _this.onTouched(); }, true);
    }
    PaperMenuFormElementDirective.prototype.onChange = function (_) { };
    PaperMenuFormElementDirective.prototype.onTouched = function (_) { };
    PaperMenuFormElementDirective.prototype.writeValue = function (value) {
        this._renderer.setElementProperty(this._element, value, value);
    };
    PaperMenuFormElementDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    PaperMenuFormElementDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    PaperMenuFormElementDirective.prototype.onValueChanged = function (value) { this.onChange(value); };
    PaperMenuFormElementDirective = __decorate([
        Directive({
            selector: 'paper-menu',
            providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(function () { return PaperMenuFormElementDirective; }), multi: true }],
            host: { '(valueChange)': 'onValueChanged($event)' }
        }), 
        __metadata('design:paramtypes', [Renderer, ElementRef])
    ], PaperMenuFormElementDirective);
    return PaperMenuFormElementDirective;
}());
export var PaperMenuNotifyForDiffersDirective = (function () {
    function PaperMenuNotifyForDiffersDirective(el, iterableDiffers, keyValueDiffers) {
        this.arrayAndObjectProperties = ["selectedValues", "keyEventTarget"];
        this._element = el.nativeElement;
        this._iterableDiffers = iterableDiffers;
        this._keyValueDiffers = keyValueDiffers;
        this._differs = {};
        this._arrayDiffs = {};
    }
    PaperMenuNotifyForDiffersDirective.prototype.ngOnInit = function () {
        var _this = this;
        var elm = this._element;
        this.arrayAndObjectProperties.filter(function (property) { return elm[property] && !_this[property]; })
            .forEach(function (property) {
            _this[property] = elm[property];
        });
    };
    PaperMenuNotifyForDiffersDirective.prototype._setValueFromElement = function (property, event) {
        var target = event.target;
        if (this[property] !== target[property]) {
            this[property] = target[property];
            this._differs[property] = this._createDiffer(this[property]);
        }
    };
    PaperMenuNotifyForDiffersDirective.prototype._createDiffer = function (value) {
        var differ = Array.isArray(value) ? this._iterableDiffers.find(value).create(null) : this._keyValueDiffers.find(value || {}).create(null);
        differ.diff(value);
        return differ;
    };
    PaperMenuNotifyForDiffersDirective.prototype._handleArrayDiffs = function (property, diff) {
        var _this = this;
        if (diff) {
            diff.forEachRemovedItem(function (item) { return _this._notifyArray(property, item.previousIndex); });
            diff.forEachAddedItem(function (item) { return _this._notifyArray(property, item.currentIndex); });
            diff.forEachMovedItem(function (item) { return _this._notifyArray(property, item.currentIndex); });
        }
    };
    PaperMenuNotifyForDiffersDirective.prototype._handleObjectDiffs = function (property, diff) {
        var _this = this;
        if (diff) {
            var notify = function (item) { return _this._notifyPath(property + '.' + item.key, item.currentValue); };
            diff.forEachRemovedItem(notify);
            diff.forEachAddedItem(notify);
            diff.forEachChangedItem(notify);
        }
    };
    PaperMenuNotifyForDiffersDirective.prototype._notifyArray = function (property, index) {
        this._notifyPath(property + '.' + index, this[property][index]);
    };
    PaperMenuNotifyForDiffersDirective.prototype._notifyPath = function (path, value) {
        this._element.notifyPath(path, value);
    };
    PaperMenuNotifyForDiffersDirective.prototype.ngDoCheck = function () {
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
    PaperMenuNotifyForDiffersDirective = __decorate([
        Directive({
            selector: 'paper-menu',
            inputs: ["selectedValues", "keyEventTarget"],
            host: { "(selected-values-changed)": "_setValueFromElement('selectedValues', $event);", "(key-event-target-changed)": "_setValueFromElement('keyEventTarget', $event);" }
        }), 
        __metadata('design:paramtypes', [ElementRef, IterableDiffers, KeyValueDiffers])
    ], PaperMenuNotifyForDiffersDirective);
    return PaperMenuNotifyForDiffersDirective;
}());
export var PaperMenuReloadConfigurationDirective = (function () {
    function PaperMenuReloadConfigurationDirective(el, zone) {
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
    PaperMenuReloadConfigurationDirective = __decorate([
        Directive({
            selector: 'paper-menu',
        }), 
        __metadata('design:paramtypes', [ElementRef, NgZone])
    ], PaperMenuReloadConfigurationDirective);
    return PaperMenuReloadConfigurationDirective;
}());
export var PaperMenu = [PaperMenuChangeEventsAdapterDirective, PaperMenuNotifyForDiffersDirective];
//# sourceMappingURL=paper-menu-directives.js.map