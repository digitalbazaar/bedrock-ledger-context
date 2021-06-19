/*
 * Copyright (c) 2017-2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const {config: {constants: bedrockConstants}} = require('bedrock');
const fs = require('fs');
const {jsonLdDocumentLoader} = require('bedrock-jsonld-document-loader');
const path = require('path');

require('bedrock-security-context');
const edContext = require('ed25519-signature-2020-context');

const contextModules = [
  'json-ld-patch-context',
  'web-ledger-context',
];

for(const module of contextModules) {
  const {contexts, constants: contextConstants} = require(module);
  for(const c in contextConstants) {
    const contextUrl = contextConstants[c];
    bedrockConstants[c] = contextUrl;
    jsonLdDocumentLoader.addStatic(contextUrl, contexts.get(contextUrl));
  }
}

bedrockConstants.TEST_CONTEXT_V1_URL = 'https://w3id.org/test/v1';
jsonLdDocumentLoader.addStatic(bedrockConstants.TEST_CONTEXT_V1_URL, JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../contexts/test-v1.jsonld'),
    {encoding: 'utf8'})));

bedrockConstants.SCHEMA_URL = 'https://schema.org/';
jsonLdDocumentLoader.addStatic(bedrockConstants.SCHEMA_URL, JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../contexts/schema.jsonld'),
    {encoding: 'utf8'})));

bedrockConstants.ED25519_2020_CONTEXT_V1_URL = edContext.CONTEXT_URL;
jsonLdDocumentLoader.addStatic(
  bedrockConstants.ED25519_2020_CONTEXT_V1_URL,
  edContext.contexts.get(edContext.CONTEXT_URL));
