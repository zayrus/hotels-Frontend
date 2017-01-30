"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var price_pipe_1 = require("./pipes/price-pipe");
var name_pipe_1 = require("./pipes/name-pipe");
var stars_pipe_1 = require("./pipes/stars-pipe");
var MainPipe = (function () {
    function MainPipe() {
    }
    return MainPipe;
}());
MainPipe = __decorate([
    core_1.NgModule({
        declarations: [
            price_pipe_1.PricePipe,
            name_pipe_1.NamePipe,
            stars_pipe_1.StarsPipe
        ],
        imports: [common_1.CommonModule],
        exports: [
            price_pipe_1.PricePipe,
            name_pipe_1.NamePipe,
            stars_pipe_1.StarsPipe
        ]
    })
], MainPipe);
exports.MainPipe = MainPipe;
//# sourceMappingURL=main-pipe.module.js.map