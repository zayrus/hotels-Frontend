"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var StarsPipe = (function () {
    function StarsPipe() {
    }
    StarsPipe.prototype.transform = function (value, args) {
        if (value == null) {
            return null;
        }
        var stars = args;
        return value.filter(function (hotel) {
            if (stars == undefined) {
                return hotel.stars;
            }
            else {
                return hotel.stars.length >= stars;
            }
        });
    };
    return StarsPipe;
}());
StarsPipe = __decorate([
    core_1.Pipe({
        name: 'StarsPipe'
    })
], StarsPipe);
exports.StarsPipe = StarsPipe;
//# sourceMappingURL=stars-pipe.js.map