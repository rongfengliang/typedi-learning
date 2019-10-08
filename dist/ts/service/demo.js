"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typedi_1 = require("typedi");
var SomeClass_1 = require("./SomeClass");
var someClass = typedi_1.Container.get(SomeClass_1.SomeClass);
someClass.someMethod();
