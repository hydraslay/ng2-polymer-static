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
export var PaperMenuButtonChangeEventsAdapterDirective = (function () {
    function PaperMenuButtonChangeEventsAdapterDirective() {
        this.eventNameForProperty = function (property) { return (property + "Change"); };
        this[this.eventNameForProperty('focused')] = new EventEmitter(false);
        this[this.eventNameForProperty('disabled')] = new EventEmitter(false);
        this[this.eventNameForProperty('opened')] = new EventEmitter(false);
        this[this.eventNameForProperty('horizontalOffset')] = new EventEmitter(false);
        this[this.eventNameForProperty('verticalOffset')] = new EventEmitter(false);
    }
    PaperMenuButtonChangeEventsAdapterDirective.prototype._emitChangeEvent = function (property, event) {
        if (!event.detail.path) {
            this[this.eventNameForProperty(property)].emit(event.detail.value);
        }
    };
    PaperMenuButtonChangeEventsAdapterDirective = __decorate([
        Directive({
            selector: 'paper-menu-button',
            outputs: ["focusedChange", "disabledChange", "openedChange", "horizontalOffsetChange", "verticalOffsetChange"],
            host: { "(focused-changed)": "_emitChangeEvent('focused', $event);", "(disabled-changed)": "_emitChangeEvent('disabled', $event);", "(opened-changed)": "_emitChangeEvent('opened', $event);", "(horizontal-offset-changed)": "_emitChangeEvent('horizontalOffset', $event);", "(vertical-offset-changed)": "_emitChangeEvent('verticalOffset', $event);" }
        }), 
        __metadata('design:paramtypes', [])
    ], PaperMenuButtonChangeEventsAdapterDirective);
    return PaperMenuButtonChangeEventsAdapterDirective;
}());
export var PaperMenuButtonValidationDirective = (function () {
    function PaperMenuButtonValidationDirective(el, injector) {
        this.injector = injector;
        this._element = el.nativeElement;
    }
    PaperMenuButtonValidationDirective.prototype.ngDoCheck = function () {
        var control = this.injector.get(FormControlName, null);
        if (control) {
            this._element.invalid = !control.pristine && !control.valid;
        }
    };
    PaperMenuButtonValidationDirective = __decorate([
        Directive({
            selector: 'paper-menu-button',
        }), 
        __metadata('design:paramtypes', [ElementRef, Injector])
    ], PaperMenuButtonValidationDirective);
    return PaperMenuButtonValidationDirective;
}());
export var PaperMenuButtonFormElementDirective = (function () {
    function PaperMenuButtonFormElementDirective(renderer, el) {
        var _this = this;
        this._renderer = renderer;
        this._element = el.nativeElement;
        this._element.addEventListener('blur', function () { return _this.onTouched(); }, true);
    }
    PaperMenuButtonFormElementDirective.prototype.onChange = function (_) { };
    PaperMenuButtonFormElementDirective.prototype.onTouched = function (_) { };
    PaperMenuButtonFormElementDirective.prototype.writeValue = function (value) {
        this._renderer.setElementProperty(this._element, value, value);
    };
    PaperMenuButtonFormElementDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    PaperMenuButtonFormElementDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    PaperMenuButtonFormElementDirective.prototype.onValueChanged = function (value) { this.onChange(value); };
    PaperMenuButtonFormElementDirective = __decorate([
        Directive({
            selector: 'paper-menu-button',
            providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(function () { return PaperMenuButtonFormElementDirective; }), multi: true }],
            host: { '(valueChange)': 'onValueChanged($event)' }
        }), 
        __metadata('design:paramtypes', [Renderer, ElementRef])
    ], PaperMenuButtonFormElementDirective);
    return PaperMenuButtonFormElementDirective;
}());
export var PaperMenuButtonNotifyForDiffersDirective = (function () {
    function PaperMenuButtonNotifyForDiffersDirective(el, iterableDiffers, keyValueDiffers) {
        this.arrayAndObjectProperties = ["keyEventTarget", "openAnimationConfig", "closeAnimationConfig"];
        this._element = el.nativeElement;
        this._iterableDiffers = iterableDiffers;
        this._keyValueDiffers = keyValueDiffers;
        this._differs = {};
        this._arrayDiffs = {};
    }
    PaperMenuButtonNotifyForDiffersDirective.prototype.ngOnInit = function () {
        var _this = this;
        var elm = this._element;
        this.arrayAndObjectProperties.filter(function (property) { return elm[property] && !_this[property]; })
            .forEach(function (property) {
            _this[property] = elm[property];
        });
    };
    PaperMenuButtonNotifyForDiffersDirective.prototype._setValueFromElement = function (property, event) {
        var target = event.target;
        if (this[property] !== target[property]) {
            this[property] = target[property];
            this._differs[property] = this._createDiffer(this[property]);
        }
    };
    PaperMenuButtonNotifyForDiffersDirective.prototype._createDiffer = function (value) {
        var differ = Array.isArray(value) ? this._iterableDiffers.find(value).create(null) : this._keyValueDiffers.find(value || {}).create(null);
        differ.diff(value);
        return differ;
    };
    PaperMenuButtonNotifyForDiffersDirective.prototype._handleArrayDiffs = function (property, diff) {
        var _this = this;
        if (diff) {
            diff.forEachRemovedItem(function (item) { return _this._notifyArray(property, item.previousIndex); });
            diff.forEachAddedItem(function (item) { return _this._notifyArray(property, item.currentIndex); });
            diff.forEachMovedItem(function (item) { return _this._notifyArray(property, item.currentIndex); });
        }
    };
    PaperMenuButtonNotifyForDiffersDirective.prototype._handleObjectDiffs = function (property, diff) {
        var _this = this;
        if (diff) {
            var notify = function (item) { return _this._notifyPath(property + '.' + item.key, item.currentValue); };
            diff.forEachRemovedItem(notify);
            diff.forEachAddedItem(notify);
            diff.forEachChangedItem(notify);
        }
    };
    PaperMenuButtonNotifyForDiffersDirective.prototype._notifyArray = function (property, index) {
        this._notifyPath(property + '.' + index, this[property][index]);
    };
    PaperMenuButtonNotifyForDiffersDirective.prototype._notifyPath = function (path, value) {
        this._element.notifyPath(path, value);
    };
    PaperMenuButtonNotifyForDiffersDirective.prototype.ngDoCheck = function () {
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
    PaperMenuButtonNotifyForDiffersDirective = __decorate([
        Directive({
            selector: 'paper-menu-button',
            inputs: ["keyEventTarget", "openAnimationConfig", "closeAnimationConfig"],
            host: { "(key-event-target-changed)": "_setValueFromElement('keyEventTarget', $event);", "(open-animation-config-changed)": "_setValueFromElement('openAnimationConfig', $event);", "(close-animation-config-changed)": "_setValueFromElement('closeAnimationConfig', $event);" }
        }), 
        __metadata('design:paramtypes', [ElementRef, IterableDiffers, KeyValueDiffers])
    ], PaperMenuButtonNotifyForDiffersDirective);
    return PaperMenuButtonNotifyForDiffersDirective;
}());
export var PaperMenuButtonReloadConfigurationDirective = (function () {
    function PaperMenuButtonReloadConfigurationDirective(el, zone) {
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
    PaperMenuButtonReloadConfigurationDirective = __decorate([
        Directive({
            selector: 'paper-menu-button',
        }), 
        __metadata('design:paramtypes', [ElementRef, NgZone])
    ], PaperMenuButtonReloadConfigurationDirective);
    return PaperMenuButtonReloadConfigurationDirective;
}());
export var PaperMenuButton = [PaperMenuButtonChangeEventsAdapterDirective, PaperMenuButtonNotifyForDiffersDirective];
//# sourceMappingURL=paper-menu-button-directives.js.map