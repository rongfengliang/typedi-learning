// Factory.ts
import "reflect-metadata"
import {Container, Service,Token} from "typedi";

export interface Factory {
    create(): any;
}

// FactoryToken.ts
export const FactoryToken = new Token<Factory>("factories");

// BeanFactory.ts
@Service({ id: FactoryToken, multiple: true })
export class BeanFactory implements Factory {

    create() {
        console.log("bean created");
    }

}

// SugarFactory.ts
@Service({ id: FactoryToken, multiple: true })
export class SugarFactory implements Factory {

    create() {
        console.log("sugar created");
    }

}

// WaterFactory.ts
@Service({ id: FactoryToken, multiple: true })
export class WaterFactory implements Factory {

    create() {
        console.log("water created");
    }

}

// app.ts
// now you can get all factories in a single array
Container.import([
    BeanFactory,
    SugarFactory,
    WaterFactory,
]);
const factories = Container.getMany(FactoryToken); // factories is Factory[]
factories.forEach(factory => factory.create());