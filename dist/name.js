"use strict";
var Container = require("typedi").Container;
var BeanFactory = (function () {
    function BeanFactory(container) {
    }
    BeanFactory.prototype.create = function () {
        console.log("BeanFactory");
    };
    return BeanFactory;
}());
var SugarFactory = (function () {
    function SugarFactory(container) {
    }
    SugarFactory.prototype.create = function () {
        console.log("SugarFactory");
    };
    return SugarFactory;
}());
var WaterFactory = (function () {
    function WaterFactory(container) {
    }
    WaterFactory.prototype.create = function () {
        console.log("WaterFactory");
    };
    return WaterFactory;
}());
var CoffeeMaker = (function () {
    function CoffeeMaker(container) {
        this.beanFactory = container.get("bean.factory");
        this.sugarFactory = container.get("sugar.factory");
        this.waterFactory = container.get("water.factory");
    }
    CoffeeMaker.prototype.make = function () {
        this.beanFactory.create();
        this.sugarFactory.create();
        this.waterFactory.create();
    };
    return CoffeeMaker;
}());
Container.set("bean.factory", new BeanFactory(Container));
Container.set("sugar.factory", new SugarFactory(Container));
Container.set("water.factory", new WaterFactory(Container));
Container.set("coffee.maker", new CoffeeMaker(Container));
var coffeeMaker = Container.get("coffee.maker");
coffeeMaker.make();
