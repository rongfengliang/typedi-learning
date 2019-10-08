
import {Container} from "typedi";
import {SomeClass } from "./SomeClass"
let someClass = Container.get(SomeClass);
someClass.someMethod();