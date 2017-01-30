"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PricePipe = (function () {
    function PricePipe() {
    }
    PricePipe.prototype.transform = function (value, args) {
        if (value == null) {
            return null;
        }
        var minToPay = args[0];
        var maxToPay = args[1];
        return value.filter(function (hotel) {
            if (maxToPay == undefined && maxToPay == undefined) {
                minToPay = 0;
                maxToPay = 2000;
            }
            return (maxToPay >= hotel.price && minToPay <= hotel.price);
        });
    };
    return PricePipe;
}());
PricePipe = __decorate([
    core_1.Pipe({
        name: 'PricePipe'
    })
], PricePipe);
exports.PricePipe = PricePipe;
//# sourceMappingURL=price-pipe.js.map