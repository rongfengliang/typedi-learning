"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typedi_1 = require("typedi");
exports.FactoryToken = new typedi_1.Token("factories");
var BeanFactory = (function () {
    function BeanFactory() {
    }
    BeanFactory.prototype.create = function () {
        console.log("bean created");
    };
    BeanFactory = __decorate([
        typedi_1.Service({ id: exports.FactoryToken, multiple: true })
    ], BeanFactory);
    return BeanFactory;
}());
exports.BeanFactory = BeanFactory;
var SugarFactory = (function () {
    function SugarFactory() {
    }
    SugarFactory.prototype.create = function () {
        console.log("sugar created");
    };
    SugarFactory = __decorate([
        typedi_1.Service({ id: exports.FactoryToken, multiple: true })
    ], SugarFactory);
    return SugarFactory;
}());
exports.SugarFactory = SugarFactory;
var WaterFactory = (function () {
    function WaterFactory() {
    }
    WaterFactory.prototype.create = function () {
        console.log("water created");
    };
    WaterFactory = __decorate([
        typedi_1.Service({ id: exports.FactoryToken, multiple: true })
    ], WaterFactory);
    return WaterFactory;
}());
exports.WaterFactory = WaterFactory;
typedi_1.Container.import([
    BeanFactory,
    SugarFactory,
    WaterFactory,
]);
var factories = typedi_1.Container.getMany(exports.FactoryToken);
factories.forEach(function (factory) { return factory.create(); });
