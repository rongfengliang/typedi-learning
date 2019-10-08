import "reflect-metadata";
import {Service} from "typedi";

@Service()
class SomeClass {

    someMethod() {
        console.log("call from  service")
    }

}

export default SomeClass
export {
    SomeClass
}