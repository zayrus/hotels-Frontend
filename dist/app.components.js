"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var app_service_1 = require("./app.service");
var AppComponent = (function () {
    function AppComponent(hotelService) {
        this.hotelService = hotelService;
        this.showNgFor = false;
        this.searchValue = '';
        this.rangeValues = [500, 2000];
        this.minPriceFounded = 0;
        this.maxPriceFounded = 0;
        this.allStars = 0;
        this.fiveStars = 0;
        this.fourStars = 0;
        this.threeStars = 0;
        this.twoStars = 0;
        this.oneStar = 0;
    }
    AppComponent.prototype.processRanges = function (e) {
        var op = [0, 0];
        op[0] = e.values[0];
        op[1] = e.values[1];
        return op;
    };
    AppComponent.prototype.getHotels = function () {
        var _this = this;
        this.hotelService
            .getHotels()
            .then(function (hotels) {
            return _this.fillStars(hotels, hotels.length);
        })
            .then(function (modHotels) {
            _this.maxPriceFounded = modHotels[modHotels.length - 1].price;
            _this.minPriceFounded = modHotels[0].price;
            _this.rangeValues = [_this.minPriceFounded, _this.maxPriceFounded];
            return _this.hotels = modHotels;
        })
            .catch(function (error) { return _this.error = error; });
    };
    AppComponent.prototype.fillStars = function (hotels, len) {
        var i;
        this.allStars = len;
        for (i = 0; i < len; i++) {
            switch (hotels[i].stars) {
                case 5:
                    this.fiveStars++;
                    break;
                case 4:
                    this.fourStars++;
                    break;
                case 3:
                    this.threeStars++;
                    break;
                case 2:
                    this.twoStars++;
                    break;
                case 1:
                    this.oneStar++;
                    break;
            }
            var starsArr = new Array(hotels[i].stars);
            hotels[i].stars = starsArr;
        }
        return hotels;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getHotels();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/app.component.html',
        styleUrls: ['./app/app.component.css']
    }),
    __metadata("design:paramtypes", [app_service_1.HotelService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.components.js.map