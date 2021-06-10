// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);

async function test() {
  console.log('test');
  return 1;
}

async function test1() {
  console.log('before await test', Zone.current.name);
  const result = await test();
  // should keep zone context test
  console.log('after await test', result, Zone.current.name);
}

async function test2() {
  console.log('before await test1', Zone.current.name);
  const result = await test1();
  // should keep zone context test
  console.log('after await test1', result, Zone.current.name);
}
console.log('begin test');
Zone.current.fork({name: 'test'}).run(test1);
// here should be <root> zone.
console.log('outside test', Zone.current.name);
Zone.current.fork({name: 'test1'}).run(() => {
  // should be test1 zone.
  console.log('another test', Zone.current.name);
});


