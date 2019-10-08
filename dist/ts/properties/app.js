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
        typedi_1.Service()
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
        typedi_1.Service()
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
        typedi_1.Service()
    ], WaterFactory);
    return WaterFactory;
}());
var CoffeeMaker = (function () {
    function CoffeeMaker() {
    }
    CoffeeMaker.prototype.make = function () {
        this.beanFactory.create();
        this.sugarFactory.create();
        this.waterFactory.create();
    };
    __decorate([
        typedi_1.Inject(),
        __metadata("design:type", BeanFactory)
    ], CoffeeMaker.prototype, "beanFactory", void 0);
    __decorate([
        typedi_1.Inject(),
        __metadata("design:type", SugarFactory)
    ], CoffeeMaker.prototype, "sugarFactory", void 0);
    __decorate([
        typedi_1.Inject(),
        __metadata("design:type", WaterFactory)
    ], CoffeeMaker.prototype, "waterFactory", void 0);
    CoffeeMaker = __decorate([
        typedi_1.Service()
    ], CoffeeMaker);
    return CoffeeMaker;
}());
var coffeeMaker = typedi_1.Container.get(CoffeeMaker);
coffeeMaker.make();
