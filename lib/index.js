/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */

const config = require('bedrock').config;
const fs = require('fs');
const path = require('path');

// ledger constants
var constants = config.constants;
// Web Ledger JSON-LD context URL and local copy
constants.WEB_LEDGER_CONTEXT_V1_URL = 'https://w3id.org/webledger/v1';
constants.CONTEXTS[constants.WEB_LEDGER_CONTEXT_V1_URL] = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../contexts/webledger-v1.jsonld'),
    {encoding: 'utf8'}));
constants.TEST_CONTEXT_V1_URL = 'https://w3id.org/test/v1';
constants.CONTEXTS[constants.TEST_CONTEXT_V1_URL] = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../contexts/test-v1.jsonld'),
    {encoding: 'utf8'}));
constants.SECURITY_CONTEXT_V1_URL = 'https://w3id.org/security/v1';
constants.CONTEXTS[constants.SECURITY_CONTEXT_V1_URL] = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../contexts/security-v1.jsonld'),
    {encoding: 'utf8'}));
constants.IDENTITY_CONTEXT_V1_URL = 'https://w3id.org/identity/v1';
constants.CONTEXTS[constants.IDENTITY_CONTEXT_V1_URL] = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../contexts/identity-v1.jsonld'),
    {encoding: 'utf8'}));
constants.SCHEMA_URL = 'https://schema.org/';
constants.CONTEXTS[constants.SCHEMA_URL] = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../contexts/schema.jsonld'),
    {encoding: 'utf8'}));
