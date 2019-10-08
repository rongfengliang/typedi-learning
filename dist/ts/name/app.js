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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typedi_1 = require("typedi");
var BeanFactory = (function () {
    function BeanFactory() {
    }
    BeanFactory.prototype.create = function () {
        console.log("BeanFactory");
    };
    BeanFactory = __decorate([
        typedi_1.Service("bean.factory")
    ], BeanFactory);
    return BeanFactory;
}());
var SugarFactory = (function () {
    function SugarFactory() {
    }
    SugarFactory.prototype.create = function () {
        console.log("SugarFactory");
    };
    SugarFactory = __decorate([
        typedi_1.Service("sugar.factory")
    ], SugarFactory);
    return SugarFactory;
}());
var WaterFactory = (function () {
    function WaterFactory() {
    }
    WaterFactory.prototype.create = function () {
        console.log("WaterFactory");
    };
    WaterFactory = __decorate([
        typedi_1.Service("water.factory")
    ], WaterFactory);
    return WaterFactory;
}());
var CoffeeMaker = (function () {
    function CoffeeMaker(beanFactory, sugarFactory) {
        this.beanFactory = beanFactory;
        this.sugarFactory = sugarFactory;
    }
    CoffeeMaker.prototype.make = function () {
        this.beanFactory.create();
        this.sugarFactory.create();
        this.waterFactory.create();
    };
    __decorate([
        typedi_1.Inject("water.factory"),
        __metadata("design:type", Object)
    ], CoffeeMaker.prototype, "waterFactory", void 0);
    CoffeeMaker = __decorate([
        typedi_1.Service("coffee.maker"),
        __param(0, typedi_1.Inject("bean.factory")),
        __param(1, typedi_1.Inject("sugar.factory")),
        __metadata("design:paramtypes", [BeanFactory,
            SugarFactory])
    ], CoffeeMaker);
    return CoffeeMaker;
}());
var coffeeMaker = typedi_1.Container.get("coffee.maker");
coffeeMaker.make();
