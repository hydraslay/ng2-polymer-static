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
export var VaadinUploadChangeEventsAdapterDirective = (function () {
    function VaadinUploadChangeEventsAdapterDirective() {
        this.eventNameForProperty = function (property) { return (property + "Change"); };
        this[this.eventNameForProperty('files')] = new EventEmitter(false);
    }
    VaadinUploadChangeEventsAdapterDirective.prototype._emitChangeEvent = function (property, event) {
        if (!event.detail.path) {
            this[this.eventNameForProperty(property)].emit(event.detail.value);
        }
    };
    VaadinUploadChangeEventsAdapterDirective = __decorate([
        Directive({
            selector: 'vaadin-upload',
            outputs: ["filesChange"],
            host: { "(files-changed)": "_emitChangeEvent('files', $event);" }
        }), 
        __metadata('design:paramtypes', [])
    ], VaadinUploadChangeEventsAdapterDirective);
    return VaadinUploadChangeEventsAdapterDirective;
}());
export var VaadinUploadValidationDirective = (function () {
    function VaadinUploadValidationDirective(el, injector) {
        this.injector = injector;
        this._element = el.nativeElement;
    }
    VaadinUploadValidationDirective.prototype.ngDoCheck = function () {
        var control = this.injector.get(FormControlName, null);
        if (control) {
            this._element.invalid = !control.pristine && !control.valid;
        }
    };
    VaadinUploadValidationDirective = __decorate([
        Directive({
            selector: 'vaadin-upload',
        }), 
        __metadata('design:paramtypes', [ElementRef, Injector])
    ], VaadinUploadValidationDirective);
    return VaadinUploadValidationDirective;
}());
export var VaadinUploadFormElementDirective = (function () {
    function VaadinUploadFormElementDirective(renderer, el) {
        var _this = this;
        this._renderer = renderer;
        this._element = el.nativeElement;
        this._element.addEventListener('blur', function () { return _this.onTouched(); }, true);
    }
    VaadinUploadFormElementDirective.prototype.onChange = function (_) { };
    VaadinUploadFormElementDirective.prototype.onTouched = function (_) { };
    VaadinUploadFormElementDirective.prototype.writeValue = function (value) {
        this._renderer.setElementProperty(this._element, value, value);
    };
    VaadinUploadFormElementDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    VaadinUploadFormElementDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    VaadinUploadFormElementDirective.prototype.onValueChanged = function (value) { this.onChange(value); };
    VaadinUploadFormElementDirective = __decorate([
        Directive({
            selector: 'vaadin-upload',
            providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(function () { return VaadinUploadFormElementDirective; }), multi: true }],
            host: { '(valueChange)': 'onValueChanged($event)' }
        }), 
        __metadata('design:paramtypes', [Renderer, ElementRef])
    ], VaadinUploadFormElementDirective);
    return VaadinUploadFormElementDirective;
}());
export var VaadinUploadNotifyForDiffersDirective = (function () {
    function VaadinUploadNotifyForDiffersDirective(el, iterableDiffers, keyValueDiffers) {
        this.arrayAndObjectProperties = ["headers", "files", "i18n"];
        this._element = el.nativeElement;
        this._iterableDiffers = iterableDiffers;
        this._keyValueDiffers = keyValueDiffers;
        this._differs = {};
        this._arrayDiffs = {};
    }
    VaadinUploadNotifyForDiffersDirective.prototype.ngOnInit = function () {
        var _this = this;
        var elm = this._element;
        this.arrayAndObjectProperties.filter(function (property) { return elm[property] && !_this[property]; })
            .forEach(function (property) {
            _this[property] = elm[property];
        });
    };
    VaadinUploadNotifyForDiffersDirective.prototype._setValueFromElement = function (property, event) {
        var target = event.target;
        if (this[property] !== target[property]) {
            this[property] = target[property];
            this._differs[property] = this._createDiffer(this[property]);
        }
    };
    VaadinUploadNotifyForDiffersDirective.prototype._createDiffer = function (value) {
        var differ = Array.isArray(value) ? this._iterableDiffers.find(value).create(null) : this._keyValueDiffers.find(value || {}).create(null);
        differ.diff(value);
        return differ;
    };
    VaadinUploadNotifyForDiffersDirective.prototype._handleArrayDiffs = function (property, diff) {
        var _this = this;
        if (diff) {
            diff.forEachRemovedItem(function (item) { return _this._notifyArray(property, item.previousIndex); });
            diff.forEachAddedItem(function (item) { return _this._notifyArray(property, item.currentIndex); });
            diff.forEachMovedItem(function (item) { return _this._notifyArray(property, item.currentIndex); });
        }
    };
    VaadinUploadNotifyForDiffersDirective.prototype._handleObjectDiffs = function (property, diff) {
        var _this = this;
        if (diff) {
            var notify = function (item) { return _this._notifyPath(property + '.' + item.key, item.currentValue); };
            diff.forEachRemovedItem(notify);
            diff.forEachAddedItem(notify);
            diff.forEachChangedItem(notify);
        }
    };
    VaadinUploadNotifyForDiffersDirective.prototype._notifyArray = function (property, index) {
        this._notifyPath(property + '.' + index, this[property][index]);
    };
    VaadinUploadNotifyForDiffersDirective.prototype._notifyPath = function (path, value) {
        this._element.notifyPath(path, value);
    };
    VaadinUploadNotifyForDiffersDirective.prototype.ngDoCheck = function () {
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
    VaadinUploadNotifyForDiffersDirective = __decorate([
        Directive({
            selector: 'vaadin-upload',
            inputs: ["headers", "files", "i18n"],
            host: { "(headers-changed)": "_setValueFromElement('headers', $event);", "(files-changed)": "_setValueFromElement('files', $event);", "(i18n-changed)": "_setValueFromElement('i18n', $event);" }
        }), 
        __metadata('design:paramtypes', [ElementRef, IterableDiffers, KeyValueDiffers])
    ], VaadinUploadNotifyForDiffersDirective);
    return VaadinUploadNotifyForDiffersDirective;
}());
export var VaadinUploadReloadConfigurationDirective = (function () {
    function VaadinUploadReloadConfigurationDirective(el, zone) {
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
    VaadinUploadReloadConfigurationDirective = __decorate([
        Directive({
            selector: 'vaadin-upload',
        }), 
        __metadata('design:paramtypes', [ElementRef, NgZone])
    ], VaadinUploadReloadConfigurationDirective);
    return VaadinUploadReloadConfigurationDirective;
}());
export var VaadinUpload = [VaadinUploadChangeEventsAdapterDirective, VaadinUploadNotifyForDiffersDirective];
//# sourceMappingURL=vaadin-upload-directives.js.map