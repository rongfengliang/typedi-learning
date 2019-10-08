var Container = require("typedi").Container;


class BeanFactory {
    constructor(container){}
    create() {
      console.log("BeanFactory")
    }
}

class SugarFactor {
    constructor(container){}
    create() {
        console.log("SugarFactory")
    }
}

class WaterFactory{
    constructor(container){}
    create() {
        console.log("WaterFactory")
    }
}

class CoffeeMaker {

    constructor(container) {
        this.beanFactory = container.get("bean.factory");
        this.sugarFactory = container.get("sugar.factory");
        this.waterFactory = container.get("water.factory");
    }

    make() {
        this.beanFactory.create();
        this.sugarFactory.create();
        this.waterFactory.create();
    }

}

Container.set("bean.factory", new BeanFactory(Container));
Container.set("sugar.factory", new SugarFactory(Container));
Container.set("water.factory", new WaterFactory(Container));
Container.set("coffee.maker", new CoffeeMaker(Container));

var coffeeMaker = Container.get("coffee.maker");
coffeeMaker.make();