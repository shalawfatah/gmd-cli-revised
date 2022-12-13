#!/usr/bin/env node
const app = require('./app');
const first_prompt = require('./launch/command_center');
const welcome = require('./launch/welcome');

welcome();
first_prompt;