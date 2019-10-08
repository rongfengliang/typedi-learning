var Container = require("typedi").Container;

/**
 * Factory interface for test
 */
interface Factory {
    create(): void;
}


/**
 * BeanFactory demo
 */
class BeanFactory implements Factory {
    constructor(container:any){}
    create() {
      console.log("BeanFactory")
    }
}

class SugarFactory implements Factory {
    constructor(container:any){}
    create() {
        console.log("SugarFactory")
    }
}

class WaterFactory implements Factory {
    constructor(container:any){}
    create() {
        console.log("WaterFactory")
    }
}

class CoffeeMaker {

    beanFactory: Factory;
    sugarFactory: Factory;
    waterFactory: Factory;

    constructor(container:any) {
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