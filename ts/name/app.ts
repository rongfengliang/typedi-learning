import "reflect-metadata"
import {Container, Service, Inject} from "typedi";
interface Factory {
    create(): void;
}

@Service("bean.factory")
class BeanFactory implements Factory {
    create() {
        console.log("BeanFactory")
    }
}

@Service("sugar.factory")
class SugarFactory implements Factory {
    create() {
        console.log("SugarFactory")
    }
}

@Service("water.factory")
class WaterFactory implements Factory {
    create() {
        console.log("WaterFactory")
    }
}

@Service("coffee.maker")
class CoffeeMaker {

    beanFactory: Factory;
    sugarFactory: Factory;

    @Inject("water.factory")
    waterFactory: Factory;

    constructor(@Inject("bean.factory") beanFactory: BeanFactory,
                @Inject("sugar.factory") sugarFactory: SugarFactory) {
        this.beanFactory = beanFactory;
        this.sugarFactory = sugarFactory;
    }

    make() {
        this.beanFactory.create();
        this.sugarFactory.create();
        this.waterFactory.create();
    }

}

let coffeeMaker = Container.get<CoffeeMaker>("coffee.maker");
coffeeMaker.make();