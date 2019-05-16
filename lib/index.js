/*
 * Copyright (c) 2017-2019 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const {config: {constants: bedrockConstants}} = require('bedrock');
const fs = require('fs');
const path = require('path');

const contextModules = [
  'json-ld-patch-context',
  'security-context',
  'web-ledger-context',
];

for(const module of contextModules) {
  const {contexts, constants: contextConstants} = require(module);
  for(const c in contextConstants) {
    const contextUrl = contextConstants[c];
    bedrockConstants[c] = contextUrl;
    bedrockConstants.CONTEXTS[contextUrl] = contexts.get(contextUrl);
  }
}

bedrockConstants.TEST_CONTEXT_V1_URL = 'https://w3id.org/test/v1';
bedrockConstants.CONTEXTS[bedrockConstants.TEST_CONTEXT_V1_URL] = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../contexts/test-v1.jsonld'),
    {encoding: 'utf8'}));

bedrockConstants.IDENTITY_CONTEXT_V1_URL = 'https://w3id.org/identity/v1';
bedrockConstants.CONTEXTS[bedrockConstants.IDENTITY_CONTEXT_V1_URL] =
  JSON.parse(fs.readFileSync(
    path.join(__dirname, '../contexts/identity-v1.jsonld'),
    {encoding: 'utf8'}));

bedrockConstants.SCHEMA_URL = 'https://schema.org/';
bedrockConstants.CONTEXTS[bedrockConstants.SCHEMA_URL] = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../contexts/schema.jsonld'),
    {encoding: 'utf8'}));
