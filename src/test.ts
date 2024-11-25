// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js'; // Required for Angular itself
import 'zone.js/testing'; // Required for Angular testing

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

// Initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
