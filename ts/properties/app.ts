
import "reflect-metadata"

import {Container, Inject, Service} from "typedi";

@Service()
class BeanFactory {
    create() {
        console.log("BeanFactory")
    }
}

@Service()
class SugarFactory {
    create() {
        console.log("SugarFactory")
    }
}

@Service()
class WaterFactory {
    create() {
        console.log("WaterFactory")
    }
}

@Service()
class CoffeeMaker {

    @Inject()
    beanFactory: BeanFactory;
    
    @Inject()
    sugarFactory: SugarFactory;
    
    @Inject()
    waterFactory: WaterFactory;

    make() {
        this.beanFactory.create();
        this.sugarFactory.create();
        this.waterFactory.create();
    }

}

let coffeeMaker = Container.get(CoffeeMaker);
coffeeMaker.make();