/*!
 * Copyright (c) 2017-2022 Digital Bazaar, Inc. All rights reserved.
 */
import * as jsonldPatchContext from 'json-ld-patch-context';
import * as webLedgerContext from 'web-ledger-context';
import {config} from 'bedrock';
import fs from 'fs';
import {jsonLdDocumentLoader} from 'bedrock-jsonld-document-loader';
import path from 'path';
import edContext from 'ed25519-signature-2020-context';
import x25519Context from 'x25519-key-agreement-2020-context';
import zcapContext from '@digitalbazaar/zcap-context';
import 'bedrock-security-context';

const {constants: bedrockConstants} = config;

const contextModules = [jsonldPatchContext, webLedgerContext];

for(const {contexts, constants: contextConstants} of contextModules) {
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

bedrockConstants.X25519_2020_CONTEXT_V1_URL =
  x25519Context.constants.CONTEXT_URL;
jsonLdDocumentLoader.addStatic(
  bedrockConstants.X25519_2020_CONTEXT_V1_URL,
  x25519Context.contexts.get(x25519Context.constants.CONTEXT_URL));

bedrockConstants.ZCAP_CONTEXT_V1_URL = zcapContext.constants.CONTEXT_URL;
jsonLdDocumentLoader.addStatic(
  bedrockConstants.ZCAP_CONTEXT_V1_URL,
  zcapContext.contexts.get(zcapContext.constants.CONTEXT_URL));
